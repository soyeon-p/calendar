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

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function EventCreate() {
  const [newEvent, setNewEvent] = useRecoilState(newEventState);
  const newEventTitleInput = useRecoilValue(newEventTitleInputState);
  const setSelectedDate = useSetRecoilState(selectedDateState);
  const setEventList = useSetRecoilState(eventListState);
  const setToggleModal = useSetRecoilState(toggleModalState);

  const onSubmit = useCallback((e) => {
    const addNewEvent = () => {
      setNewEvent((prev) => ({
        ...prev,
        id: Date.now(),
      }));
    };

    addNewEvent();
    console.log("newInput:" + newEvent.title);
    setEventList((prev) => [...prev, newEvent]);
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
