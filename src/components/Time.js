import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Container, TimeStamp, Greeting } from "./TimeStyles";

const Time = () => {
  let today = new Date();
  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 12) {
      return "Good Morning";
    } else if (today.getHours() >= 12 && today.getHours() < 17) {
      return "Good Afternoon";
    } else if (today.getHours() >= 18 && today.getHours() < 24) {
      return "Good Evening";
    } else {
      return "Please get some sleep and be a goog human";
    }
  };
  return (
    <Container>
      <TimeStamp>
        <Moment format="LT" />{" "}
      </TimeStamp>
      <Greeting>{greeting()}</Greeting>
    </Container>
  );
};

export default Time;
