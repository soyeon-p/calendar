import { React, useCallback } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  selectedDateState,
  toggleModalState,
  eventListState,
  eventTitleState,
  eventStartTimeState,
  eventEndTimeState,
  selectedEventIdState,
} from "../../../Recoil/atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { calcEventTime } from "./CalcEventTime";
import { ModalState } from "./ModalState";

export default function EventUpdate() {
  const [eventList, setEventList] = useRecoilState(eventListState);
  const eventTitle = useRecoilValue(eventTitleState);
  const eventStartTime = useRecoilValue(eventStartTimeState);
  const eventEndTime = useRecoilValue(eventEndTimeState);
  const selectedDate = useRecoilValue(selectedDateState);
  const selectedEventId = useRecoilValue(selectedEventIdState);
  const setToggleModal = useSetRecoilState(toggleModalState);

  const disabled = ModalState(eventStartTime, eventEndTime, eventTitle)

  const onSubmit = useCallback(() => {
    setEventList(
      eventList.map((event) =>
        event.id.toString() === selectedEventId
          ? {
              ...event,
              title: eventTitle,
              start: selectedDate + calcEventTime(eventStartTime),
              end: selectedDate + calcEventTime(eventEndTime),
            }
          : event
      )
    );

    setToggleModal((prev) => !prev);
  }, [
    selectedEventId,
    eventTitle,
    eventStartTime,
    eventEndTime,
    selectedDate,
    eventList,
    setEventList,
    setToggleModal,
  ]);

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
        disabled={disabled}
      >
        수정
      </Button>
    </Stack>
  );
}