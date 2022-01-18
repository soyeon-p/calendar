import React, { useCallback, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box } from "@material-ui/core";
import { useStyles } from "../../Styles/styles";
import CalendarModal from "./CalendarModal";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  toggleModalState,
  selectedDateState,
  eventListState,
  eventStartTimeState,
  eventEndTimeState,
  eventTitleState,
} from "../../Recoil/atoms";

const events = [
  {
    id: 1,
    title: "event 1",
    start: "2022-01-16T10:00:00",
    end: "2022-01-16T12:00:00",
  },
  {
    id: 2,
    title: "event 2",
    start: "2022-01-11T12:00:00",
    end: "2022-01-11T15:00:00",
  },
  // { id: 3, title: 'event 3', start: '2022-01-18', end: '2022-01-20' },
];

function Calendar() {
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useRecoilState(toggleModalState);
  const [, setSelectedDate] = useRecoilState(selectedDateState);
  const eventList = useRecoilValue(eventListState);
  const resetTitle = useResetRecoilState(eventTitleState);
  const resetStartTime = useResetRecoilState(eventStartTimeState);
  const resetEndTime = useResetRecoilState(eventEndTimeState);

  const onToggleModal = useCallback(() => {
    setToggleModal((prev) => !prev);
  }, [setToggleModal]);

  useEffect(() => {
    if (!toggleModal) {
      resetTitle();
      resetStartTime();
      resetEndTime();
    }
  }, [toggleModal, resetTitle, resetStartTime, resetEndTime]);

  return (
    <Box className={classes.box}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          center: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={eventList}
        eventColor="red"
        nowIndicator
        dateClick={(e) => {
          setSelectedDate(e.dateStr);
          onToggleModal();
        }}
        eventClick={(e) => {
          console.log(e.event);
        }}
      />
      {toggleModal ? <CalendarModal /> : null}
    </Box>
  );
}

export default Calendar;
