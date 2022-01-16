import { atom } from 'recoil';

export const dustDataState = atom({
  key: 'dustDataState',
  default: [],
});

export const selectedCityState = atom({
  key: 'selectedCityState',
  default: ''
})

export const selectedDustState = atom({
  key: 'selectedDustState',
  default: ''
})