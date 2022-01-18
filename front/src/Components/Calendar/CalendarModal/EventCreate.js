import { React, useState, useCallback } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import {
  selectedDateState,
  newEventState,
  eventListState,
  newEventTitleInputState,
  toggleModalState,
} from "../../../Recoil/atoms";

import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from "recoil";

export default function EventCreate() {
  const [newEvent, setNewEvent] = useRecoilState(newEventState);
  const setEventList = useSetRecoilState(eventListState);
  const setToggleModal = useSetRecoilState(toggleModalState);
  const resetNewEvent = useResetRecoilState(newEventState);
  const resetSelectedDate = useResetRecoilState(selectedDateState);
  const onSubmit = useCallback((e) => {
    setEventList((prev) => [...prev, newEvent]);
    resetNewEvent();
    resetSelectedDate();
    setToggleModal((prev) => !prev);
  });

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        paddingTop: "10px",
      }}
    >
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        추가
      </Button>
    </Stack>
  );
}
