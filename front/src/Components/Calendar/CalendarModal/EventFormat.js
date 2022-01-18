import { React } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EventTime from "./EventTime";
import EventCreate from "./EventCreate";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { eventTitleState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

export default function EventFormat() {
  const [, setTitle] = useRecoilState(eventTitleState);
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
        {/* <Button size="small" variant="contained" color="error">
          삭제
        </Button> */}
        <EventCreate />
      </Stack>
    </Box>
  );
}
