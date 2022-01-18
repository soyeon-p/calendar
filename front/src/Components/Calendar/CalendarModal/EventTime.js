import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import {
  newEventState,
  selectedDateState,
  newEventStartTimeState,
  newEventEndTimeState,
} from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

export default function EventTime() {
  const [newEvent, setNewEvent] = useRecoilState(newEventState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [newEventStartTimeS, setNewEventStartTime] = useRecoilState(
    newEventStartTimeState
  );
  const [newEventEndTime, setNewEventEndTime] =
    useRecoilState(newEventEndTimeState);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          value={newEvent.start}
          label="시작 시간"
          onChange={(startTime) => {
            setNewEventStartTime(startTime);
            setNewEvent((prev) => ({
              ...prev,
              start:
                selectedDate +
                new Date(startTime - startTime.getTimezoneOffset() * 60000)
                  .toISOString()
                  .slice(10, 16),
            }));
          }}
          minTime={new Date(0, 0, 0, 8)}
          maxTime={new Date(0, 0, 0, 18, 45)}
        />
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          label="종료 시간"
          value={newEvent.end}
          onChange={(endTime) => {
            setNewEventEndTime(endTime);
            setNewEvent((prev) => ({
              ...prev,
              end:
                selectedDate +
                new Date(endTime - endTime.getTimezoneOffset() * 60000)
                  .toISOString()
                  .slice(10, 16),
            }));
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
