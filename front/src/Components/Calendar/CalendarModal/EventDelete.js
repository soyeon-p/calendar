import { React, useCallback } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  toggleModalState,
  eventListState,
  selectedEventIdState,
} from "../../../Recoil/atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function EventDelete() {
  const [eventList, setEventList] = useRecoilState(eventListState);
  const selectedEventId = useRecoilValue(selectedEventIdState);
  const setToggleModal = useSetRecoilState(toggleModalState);

  const onSubmit = useCallback(() => {
    setEventList(
      eventList.filter((event) => event.id.toString() !== selectedEventId)
    );

    setToggleModal((prev) => !prev);
  }, [selectedEventId, eventList, setEventList, setToggleModal]);

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
        color="warning"
        onClick={onSubmit}
      >
        삭제
      </Button>
    </Stack>
  );
}
