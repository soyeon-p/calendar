import { React, useCallback, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import {
  selectedDateState,
  toggleModalState,
  eventListState,
  eventTitleState,
  eventStartTimeState,
  eventEndTimeState,
} from "../../../Recoil/atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { calcEventTime } from "./CalcEventTime";
import { ModalState } from "./ModalState";

export default function EventCreate() {
  const [eventList, setEventList] = useRecoilState(eventListState);
  const eventTitle = useRecoilValue(eventTitleState);
  const eventStartTime = useRecoilValue(eventStartTimeState);
  const eventEndTime = useRecoilValue(eventEndTimeState);
  const selectedDate = useRecoilValue(selectedDateState);
  const setToggleModal = useSetRecoilState(toggleModalState);

  const disabled = ModalState(eventStartTime, eventEndTime, eventTitle);

  const onSubmit = useCallback(() => {
    async function createEventData() {
      await axios
        .post(`http://localhost:4000/events`, {
          id: Date.now(),
          title: eventTitle,
          start: selectedDate + calcEventTime(eventStartTime),
          end: selectedDate + calcEventTime(eventEndTime),
        })
        .then(function (response) {
          if (response.data.success) {
            console.log("successful");
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    createEventData();
    setEventList([
      ...eventList,
      {
        id: Date.now(),
        title: eventTitle,
        start: selectedDate + calcEventTime(eventStartTime),
        end: selectedDate + calcEventTime(eventEndTime),
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
        추가
      </Button>
    </Stack>
  );
}
