import React from "react";
import { Heading, Para, Info } from "./styles";
const InfoPara = ({ head, content }) => {
  return (
    <Info>
      <Heading Head={head}>{content.title}</Heading>
      <Para Head={head}>{content.content}</Para>
    </Info>
  );
};
export default InfoPara;
