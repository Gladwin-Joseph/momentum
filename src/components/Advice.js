import React, { useState, useEffect } from "react";
import axios from "axios";
import { AdviceContainer, Text } from "./AdviceStyles";

const url = "https://api.adviceslip.com/advice";
const Advice = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!data) return null;
  console.log(data);
  const advice = data.slip.advice;
  return (
    <AdviceContainer>
      <Text>{advice}</Text>
    </AdviceContainer>
  );
};

export default Advice;
