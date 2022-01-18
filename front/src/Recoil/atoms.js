import { atom } from "recoil";

export const dustDataState = atom({
  key: "dustDataState",
  default: [],
});

export const selectedCityState = atom({
  key: "selectedCityState",
  default: "",
});

export const selectedDustState = atom({
  key: "selectedDustState",
  default: "",
});

//일정 모달창
export const toggleModalState = atom({
  key: "toggleModalState",
  default: false,
});

export const selectedDateState = atom({
  key: "selectedDateState",
  default: "",
});

export const eventTitleState = atom({
  key: "newEventTitleInput",
  default: null,
});

export const eventStartTimeState = atom({
  key: "newEventStartTimeState",
  default: null
});

export const eventEndTimeState = atom({
  key: "newEventEndTimeState",
  default: null
});

export const eventListState = atom({
  key: "newEventState",
  default: []
});
