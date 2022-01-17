import React, { useCallback, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@material-ui/core';
import { useStyles } from '../../Styles/styles';
import CalendarModal from './CalendarModal';
import { useRecoilState } from 'recoil';
import { toggleModalState } from '../../Recoil/atoms';

const events = [
  {
    id: 1,
    title: 'event 1',
    start: '2022-01-16T10:00:00',
    end: '2022-01-16T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2022-01-11T12:00:00',
    end: '2022-01-11T15:00:00',
  },
  // { id: 3, title: 'event 3', start: '2022-01-18', end: '2022-01-20' },
];

function Calendar() {
  const classes = useStyles();
  const [toggleModal, setToggleModal] = useRecoilState(toggleModalState);
  const [isClickDay, setIsClickDay] = useState(false);

  const onToggleModal = useCallback(() => {
    setToggleModal((prev) => !prev);
  }, [setToggleModal]);

  return (
    <Box className={classes.box}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        eventColor="red"
        nowIndicator
        dateClick={onToggleModal}
        eventClick={(e) => {}}
      />
      {toggleModal ? <CalendarModal /> : null}
    </Box>
  );
}

export default Calendar;
