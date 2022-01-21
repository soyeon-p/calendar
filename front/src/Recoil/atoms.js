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

export const weatherDataState = atom({
  key: 'weatherDataState',
  default: null,
})

export const weatherValueState = atom({
  key: 'weatherValueState',
  default: null
})

export const submitFormState = atom({
  key: 'submitFormState',
  default: false
})

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
  default: "",
});

export const eventStartTimeState = atom({
  key: "newEventStartTimeState",
  default: null,
});

export const eventEndTimeState = atom({
  key: "newEventEndTimeState",
  default: null,
});

export const eventListState = atom({
  key: "newEventState",
  default: [],
});

export const eventClickState = atom({
  key: "eventClickState",
  default: false,
});

export const selectedEventIdState = atom({
  key: "selectedEventIdState",
  default: null,
});
