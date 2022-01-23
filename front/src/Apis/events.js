import axios from "axios";

export const getEvents = async () => {
  const response = await axios.get("http://localhost:4000/events");
  return response.data;
};

export const getEventById = async (id) => {
  const response = await axios.get(`http://localhost:4000/events/${id}`);
  return response.data;
};
