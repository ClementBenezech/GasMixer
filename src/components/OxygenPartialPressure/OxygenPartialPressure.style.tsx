import styled from "styled-components";

export const VerticalTable = styled.div`
  display: flex;
  height: 7vw;
  box-sizing: border-box;
  width: 75%;
  flex-direction: row;
  border-radius: 0.2vw;
  font-family: "Zen Dots";
  border: 1px solid white;
  padding: 0.5vw;
  position: relative;
  margin-top: 6vh;
  margin-right: 3.5;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    width: 96vw;
    height: 10vh;
    justify-content: center;
    align-items: center;
    margin-top: 0.5vh;
  }
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: black;
  width: 8vw;
  z-index: 2;
  gap: 2%;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    height: 8vh;
  }
`;

export const TableCell = styled.div<{
  color?: string;
}>`
  color: ${(props) => props.color ?? "white"};
  //border: 1px solid ${(props) => props.color ?? "white"};
  display: flex;
  justify-content: center;
  width: 45%;
  height: 30%;
  align-items: center;
  border-radius: 0.3vw;
  box-sizing: border-box;
  font-size: 0.9vw;
  white-space: nowrap;
  min-width: 3vw;
  padding: 2px;
  background: #00000048;
  @media only screen and (max-width: 1024px) {
    font-size: 1.3vh;
    background: white;
    min-width: 90%;
  }
`;

export const StandardTableCell = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
  width: 45%;
  align-items: center;
  border-radius: 20%;
  box-sizing: border-box;
  font-size: 80%;
  white-space: nowrap;
  min-width: min-content;
  @media only screen and (max-width: 1024px) {
    font-size: 1.3vh;
  }
`;

export const TitleTableRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #ffffff;
  width: 10%;
  height: 100%;
  align-items: center;
  border-radius: 20%;
  box-sizing: border-box;
  font-size: 80%;
  white-space: nowrap;
  min-width: min-content;
  @media only screen and (max-width: 1024px) {
    font-size: 1vh;
    width: 8%;
    flex-wrap: nowrap;
  }
`;

export const DiveTankAndGraphContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #ffffff;
  width: 88.2%;
  box-sizing: border-box;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const DiveTankContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
  width: 10%;
  align-items: center;
  border-radius: 20%;
  box-sizing: border-box;
  font-size: 80%;
  white-space: nowrap;
  min-width: min-content;
`;
