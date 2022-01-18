import { React, useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {
  selectedDateState,
  toggleModalState,
  eventListState,
  eventTitleState,
  eventStartTimeState,
  eventEndTimeState,
} from '../../../Recoil/atoms';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const calcTime = (time) => {
  return new Date(time - time.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(10, 16);
};

export default function EventCreate() {
  const [eventList, setEventList] = useRecoilState(eventListState);
  const eventTitle = useRecoilValue(eventTitleState);
  const eventStartTime = useRecoilValue(eventStartTimeState);
  const eventEndTime = useRecoilValue(eventEndTimeState);
  const selectedDate = useRecoilValue(selectedDateState);
  const setToggleModal = useSetRecoilState(toggleModalState);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (eventStartTime && eventEndTime && eventTitle) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [eventStartTime, eventEndTime, eventTitle]);

  const onSubmit = useCallback(() => {
    setEventList([
      ...eventList,
      {
        id: Date.now(),
        title: eventTitle,
        start: selectedDate + calcTime(eventStartTime),
        end: selectedDate + calcTime(eventEndTime),
      },
    ]);

    setToggleModal((prev) => !prev);
  }, [
    eventTitle,
    eventStartTime,
    eventEndTime,
    selectedDate,
    eventList,
    setEventList,
    setToggleModal
  ]);

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        paddingTop: '10px',
      }}
    >
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={onSubmit}
        disabled={disabled}
      >
        추가
      </Button>
    </Stack>
  );
}
