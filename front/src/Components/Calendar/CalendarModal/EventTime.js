import { React } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import {
  eventStartTimeState,
  eventEndTimeState,
} from '../../../Recoil/atoms';
import { useRecoilState } from 'recoil';

export default function EventTime() {
  const [eventStartTime, setEventStartTime] = useRecoilState(eventStartTimeState);
  const [eventEndTime, setEventEndTime] = useRecoilState(eventEndTimeState);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          value={eventStartTime}
          label="시작 시간"
          onChange={(startTime) => {
            setEventStartTime(startTime);
          }}
        />
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          label="종료 시간"
          value={eventEndTime}
          onChange={(endTime) => {
            setEventEndTime(endTime);
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
