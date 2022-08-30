import React from "react";
import { HackSec, CardWrapper } from "./styles";
import InfoPara from "./infoPara";
import HackCard from "./hackCard";
import hackContent from "../content/hackContent";
const App = () => {
  return (
    <>
      <HackSec>
        <InfoPara head={true} content={hackContent.heading} />
        <CardWrapper>
          {hackContent.cardContent.map((data) => (
            <HackCard cardData={data} />
          ))}
        </CardWrapper>
      </HackSec>
    </>
  );
};
export default App;
