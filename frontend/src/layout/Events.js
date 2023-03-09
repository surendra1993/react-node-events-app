import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

// const EVENTS = [
//   { id: "e1", title: "Event 1" },
//   { id: "e2", title: "Event 2" },
//   { id: "e3", title: "Event 3" },
// ];

const EventPage = () => {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return {
      isError: true,
      message: "Could not fetch events",
    };
  } else {
    return response;
  }
}
