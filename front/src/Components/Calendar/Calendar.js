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
  eventClickState,
  selectedEventIdState,
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
  const resetSelectedEventId = useResetRecoilState(selectedEventIdState);
  const resetEventClick = useResetRecoilState(eventClickState);

  const [eventClick, setEventClick] = useRecoilState(eventClickState);
  const [, setTitle] = useRecoilState(eventTitleState);
  const [, setStartTime] = useRecoilState(eventStartTimeState);
  const [, setEndTime] = useRecoilState(eventEndTimeState);
  const [, setSelectedEventId] = useRecoilState(selectedEventIdState);

  const onToggleModal = useCallback(() => {
    setToggleModal((prev) => !prev);
  }, [setToggleModal]);

  const onClickEvent = useCallback(
    (event) => {
      setEventClick((prev) => !prev);
      setSelectedEventId(event.id);
      setTitle(event.title);
      setStartTime(event.start);
      setEndTime(event.end);
    },
    [setEventClick, setSelectedEventId, setTitle, setStartTime, setEndTime]
  );

  useEffect(() => {
    if (!toggleModal) {
      resetTitle();
      resetStartTime();
      resetEndTime();
      resetSelectedEventId();
      resetEventClick();
    }
  }, [
    toggleModal,
    resetTitle,
    resetStartTime,
    resetEndTime,
    resetSelectedEventId,
    resetEventClick,
  ]);

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
          onClickEvent(e.event);
          onToggleModal();
        }}
      />
      {toggleModal ? <CalendarModal /> : null}
    </Box>
  );
}

export default Calendar;
