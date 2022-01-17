import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TodoTime from "./TodoTime";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function TodoFormat() {
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
        <TextField label="오늘 할 일" color="primary" focused />
        <TodoTime />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          paddingTop: "10px",
        }}
      >
        <Button size="small" variant="contained" color="error">
          삭제
        </Button>
        <Button size="small" variant="contained" color="primary">
          추가
        </Button>
      </Stack>
    </Box>
  );
}
