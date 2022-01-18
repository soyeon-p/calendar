import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { toggleModalState } from "../../Recoil/atoms";
import EventFormat from "./CalendarModal/EventFormat";

const style = {
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "10px solid #4050b6",
  borderRadius: "30px",
  boxShadow: 24,
  p: 4,
};

export default function CalendarModal() {
  const [toggleModal, setToggleModal] = useRecoilState(toggleModalState);
  return (
    <Modal
      open={toggleModal}
      onClose={() => setToggleModal((prev) => !prev)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <EventFormat />
      </Box>
    </Modal>
  );
}
