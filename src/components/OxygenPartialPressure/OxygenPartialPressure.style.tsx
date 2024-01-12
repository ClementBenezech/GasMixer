import styled from "styled-components";

export const PPO2ENDTable = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: row;
  border-radius: 0.2vw;
  font-family: "Roboto";
  padding: 1vh;
  position: relative;
  margin-top: 6vh;
  margin-right: 3.5;
  justify-content: space-between;
  gap: 0.8vh;
  flex-wrap: wrap;
  @media only screen and (max-width: 1024px) {
    width: 96vw;
    justify-content: center;
    align-items: center;
    margin-top: 0.5vh;
  }
`;

export const PPO2Section = styled.div`
  width: 100%;
  padding: 1%;
  box-sizing: border-box;
`;

export const SectionTitle = styled.div`
  height: 5vh;
  text-align: left;
  font-size: 1.5vw;
  font-family: "Roboto";
  margin-left: 2%;
  width: 96%;
  border-radius: 1vh 1vh 0 0;
  border-bottom: 1px solid white;
  margin-bottom: 1vh;
  font-weight: bold;
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
    color: #ffffff;
    height: min-content;
    text-align: left;
    white-space: nowrap;
    padding-left: 1vh;
    box-sizing: border-box;
    margin-bottom: 0.5vh;
  }
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: black;
  width: 20%;
  z-index: 2;
  gap: 0;
  height: 100%;
  background: #d2d2d2;
  border-radius: 0.7vh;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    height: 8vh;
    width: 32%;
  }
`;

export const TableCell = styled.div<{
  color?: string;
}>`
  //border: 1px solid ${(props) => props.color ?? "white"};
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 33%;
  align-items: center;
  box-sizing: border-box;
  font-size: 0.9vw;
  white-space: nowrap;
  min-width: 3vw;
  background: #00000048;
  overflow: hidden;
  & > i {
    color: ${(props) => props.color ?? "white"};
    width: 25%;
    padding: 0.5vh;
    background: #d2d2d2;
    height: 100%;
    font-size: 2vh;
  }
  & > div {
    padding-left: 1vh;
    font-size: 2vh;
    width: 100%;
    background: white;
    width: 100%;
    text-align: left;
    font-weight: bold;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 2vh;

    background: #d2d2d2;
    min-width: 90%;
    height: 100%;
  }
`;

export const StandardTableCell = styled.div<{
  color?: string;
}>`
  display: flex;
  justify-content: flex-start;
  color: #ede5e5;
  background: ${(props) => props.color};
  width: 100%;
  height: 40%;
  align-items: center;
  box-sizing: border-box;
  font-size: 100%;
  white-space: nowrap;
  min-width: min-content;
  font-size: 3vh;

  & > i {
    width: 25%;
    padding: 0.5vh;
    box-sizing: border-box;
  }
  & > div {
    padding-left: 1vh;
    font-size: 2vh;
    font-weight: bold;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 2vh;

    min-width: 90%;
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

export const BarGraphsContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
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
