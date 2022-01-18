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

export const eventListState = atom({
  key: "eventList",
  default: [],
});

export const selectedDateState = atom({
  key: "selectedDateState",
  default: "",
});

export const newEventState = atom({
  key: "newEventState",
  default: {
    id: "",
    title: "event 1",
    start: "2022-01-01T12:00",
    end: "2022-01-01T14:00",
  },
});

export const newEventTitleInputState = atom({
  key: "newEventTitleInput",
  default: "",
});

export const newEventStartTimeState = atom({
  key: "newEventStartTimeState",
  default: {},
});

export const newEventEndTimeState = atom({
  key: "newEventEndTimeState",
  default: {},
});
