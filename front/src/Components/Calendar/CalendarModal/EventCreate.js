import { React, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EventTime from "./EventTime";
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

  const onSubmit = (e) => {
    const addNewEvent = () => {
      setNewEvent((prev) => ({
        ...prev,
        title: newEventTitleInput,
      }));
    };

    addNewEvent();
    setEventList((prev) => [...prev, newEvent]);
    setToggleModal((prev) => !prev);
  };

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
