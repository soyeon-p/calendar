import { React, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EventTime from "./EventTime";
import EventCreate from "./EventCreate";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  selectedDateState,
  newEventState,
  newEventTitleInputState,
} from "../../../Recoil/atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function EventFormat() {
  const selectedDate = useRecoilValue(selectedDateState);
  const [newEvent, setNewEvent] = useRecoilState(newEventState);
  const setNewEventTitleInput = useSetRecoilState(newEventTitleInputState);
  const onChange = (e) => {
    setNewEventTitleInput(e.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "25ch",
          display: "flex",
          justifyContent: "center",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2}>
        <TextField
          label="오늘 할 일"
          color="primary"
          focused
          onChange={onChange}
        />
        <EventTime />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          paddingTop: "10px",
        }}
      >
        <Button size="small" variant="contained" color="error">
          삭제
        </Button>
        <EventCreate />
      </Stack>
    </Box>
  );
}
