import { Typography } from "@material-ui/core";
import { selector } from "recoil";
import { dustDataState, selectedCityState, selectedDustState } from "./atoms";

export const dustFilterListState = selector({
  key: "dustFilterCityListState",
  get: ({ get }) => {
    const cityFilter = get(selectedCityState);
    const dustFilter = get(selectedDustState);
    const list = get(dustDataState);
    let filteredList = [];

    const addData = (data, state, color) => {
      filteredList.push({
        dust: data[cityFilter],
        dataTime: data.dataTime,
        state,
        avatar: <Typography color={color}>{state}</Typography>,
      });
    };

    list.map((dustData) => {
      if (dustData[cityFilter] <= 30) {
        addData(dustData, "좋음", "primary");
      } else if (dustData[cityFilter] <= 80) {
        addData(dustData, "보통", "textSecondary");
      } else if (dustData[cityFilter] <= 150) {
        addData(dustData, "나쁨", "secondary");
      } else {
        addData(dustData, "매우 나쁨", "secondary");
      }
      return dustData;
    });

    switch (dustFilter) {
      case "좋음":
      case "보통":
      case "나쁨":
      case "매우 나쁨":
        return filteredList.filter((dust) => dust.state === dustFilter);
      case "모두":
      default:
        return filteredList;
    }
  },
});
