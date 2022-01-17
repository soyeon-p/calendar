import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

export default function TodoTime() {
  const [value, setValue] = React.useState(new Date("2020-01-01 12:00"));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          value={value}
          label="시작 시간"
          onChange={(newValue) => {
            setValue(newValue);
          }}
          minTime={new Date(0, 0, 0, 8)}
          maxTime={new Date(0, 0, 0, 18, 45)}
        />
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          label="종료 시간"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          shouldDisableTime={(timeValue, clockType) => {
            if (clockType === "hours" && timeValue % 2) {
              return true;
            }
            return false;
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
