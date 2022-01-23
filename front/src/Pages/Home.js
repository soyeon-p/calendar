import { React, useEffect } from "react";
import { Container } from "@material-ui/core";
import Calendar from "../Components/Calendar/Calendar";
import axios from "axios";
import { useRecoilState } from "recoil";
import { eventListState } from "../Recoil/atoms";

const Home = () => {
  const [, setEventList] = useRecoilState(eventListState);

  useEffect(() => {
    const fetchEventData = async () => {
      await axios
        .get(`http://localhost:4000/events`)
        .then(function (response) {
          setEventList(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchEventData();
    return () => {};
  }, []);

  return (
    <Container>
      <Calendar />
    </Container>
  );
};

export default Home;
