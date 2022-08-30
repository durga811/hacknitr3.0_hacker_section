import React from "react";
import InfoPara from "./infoPara";
import { Image, Card } from "./styles";

const HackCard = ({ cardData }) => {
  const { src, ...content } = cardData;
  return (
    <Card>
      <Image>
        <img
          src={src}
          alt={content.title}
          style={{ width: "100%", height: "auto" }}
        />
      </Image>
      <InfoPara head={false} content={content} />
    </Card>
  );
};
export default HackCard;
