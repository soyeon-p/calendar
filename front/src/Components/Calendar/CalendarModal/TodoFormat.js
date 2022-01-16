import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TodoTime from "./TodoTime";

export default function ColorTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="오늘 할 일" color="secondary" focused />
      <TodoTime />
    </Box>
  );
}
