import styled from "styled-components";

export const HackSec = styled.div`
  margin: 4%;
`;
export const Heading = styled.h2`
  font-size: ${(props) => (props.Head ? "3rem" : "1.3rem")};
  font-weight: 400;
  margin: 0%;

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => (props.Head ? "2rem" : "1rem")};
  }
`;
export const Para = styled.p`
  color: #67676d;
  margin: 7.5px auto;
  font-weight: 500;
  @media only screen and (min-width: 768px) {
    margin-right: ${(props) => props.Head && "25%"};
  }
`;
export const Info = styled.div`
  margin: 15px 20px;
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
export const Card = styled.div`
  margin: 2.5%;
  background-color: #18171d;
  border-radius: 3%;
`;
export const Image = styled.div``;
