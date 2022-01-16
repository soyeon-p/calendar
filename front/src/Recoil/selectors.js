import { selector } from 'recoil';
import { dustDataState, selectedCityState } from './atoms';

export const dustFilterCityListState = selector({
  key: 'dustFilterCityListState',
  get: ({ get }) => {
    const filter = get(selectedCityState);
    const list = get(dustDataState);
    const filteredList = [];

    const addData = (data, state) => {
      filteredList.push({
        dust: data[filter],
        dataTime: data.dataTime,
        state,
      });
    };

    list.map((dustData) => {
      if (dustData[filter] <= 30) {
        addData(dustData, '좋음');
      } else if (dustData[filter] <= 80) {
        addData(dustData, '보통');
      } else if (dustData[filter] <= 150) {
        addData(dustData, '나쁨');
      } else {
        addData(dustData, '매우 나쁨');
      }
      return dustData
    });
    return filteredList;
  },
});
