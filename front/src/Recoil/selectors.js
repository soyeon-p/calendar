import { Typography } from '@material-ui/core';
import { selector } from 'recoil';
import { dustDataState, selectedCityState } from './atoms';

export const dustFilterCityListState = selector({
  key: 'dustFilterCityListState',
  get: ({ get }) => {
    const filter = get(selectedCityState);
    const list = get(dustDataState);
    const filteredList = [];

    const addData = (data, state, color) => {
      filteredList.push({
        dust: data[filter],
        dataTime: data.dataTime,
        state,
        avatar: <Typography color={color}>{state}</Typography>
      });
    };

    list.map((dustData) => {
      if (dustData[filter] <= 30) {
        addData(dustData, '좋음', 'primary');
      } else if (dustData[filter] <= 80) {
        addData(dustData, '보통', 'textSecondary');
      } else if (dustData[filter] <= 150) {
        addData(dustData, '나쁨', 'secondary');
      } else {
        addData(dustData, '매우 나쁨', 'secondary');
      }
      return dustData
    });
    return filteredList;
  },
});
