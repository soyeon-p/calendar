import { React } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EventTime from "./EventTime";
import EventCreate from "./EventCreate";
import EventUpdate from "./EventUpdate";
import EventDelete from "./EventDelete";
import Stack from "@mui/material/Stack";
import { eventTitleState, eventClickState } from "../../../Recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export default function EventFormat() {
  const [title, setTitle] = useRecoilState(eventTitleState);
  const eventClick = useRecoilValue(eventClickState);
  const onChange = (e) => {
    setTitle(e.target.value);
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
          required
          value={title}
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
        {eventClick ? (
          <>
            <EventDelete />
            <EventUpdate />
          </>
        ) : (
          <EventCreate />
        )}
      </Stack>
    </Box>
  );
}
