import styled from "styled-components";

export const PPO2ENDTable = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: row;
  border-radius: 0.2vw;
  font-family: "Roboto";
  padding: 1vh 2%;
  position: relative;
  margin-top: 2vh;
  margin-right: 3.5;
  justify-content: space-between;
  gap: 0.8vh;
  flex-wrap: wrap;
  @media only screen and (max-width: 1024px) {
    justify-content: flex-end;
    align-items: center;
    margin-top: 0px;
    padding: 0.5vh 0;
  }
`;

export const PPO2ENDSection = styled.div`
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
    box-sizing: border-box;
    margin-bottom: 0.5vh;
  }
`;

export const TableCard = styled.div<{ opacity?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: black;
  width: 16%;
  z-index: 2;
  gap: 0;
  height: 100%;
  background: white;
  border-radius: 0.7vh;
  overflow: hidden;
  opacity: ${(props) => props.opacity ?? 1};
  box-sizing: border-box;
  @media only screen and (max-width: 1024px) {
    height: 8vh;
    width: 23%;
  }
`;

export const TableCardRow = styled.div`
  display: flex;
  width: 100%;
  height: min-content;
`;

export const TableCell = styled.div<{
  color?: string;
  backgroundColor?: string;
  width?: string;
}>`
  //background: ${(props) => props.backgroundColor ?? "white"};
  //border-bottom: 0.5vh solid ${(props) => props.backgroundColor ?? "white"};
  display: flex;
  justify-content: center;
  width: ${(props) => props.width ?? "50%"};
  height: 33%;
  align-items: center;
  box-sizing: border-box;
  font-size: 0.9vw;
  white-space: nowrap;
  min-width: 3vw;
  color: ${(props) => props.color ?? "white"};
  overflow: hidden;
  & > i {
    color: ${(props) => props.color ?? "white"};
    width: 10%;
    display: flex;
    justify-content: center;
    height: 100%;
    font-size: 0.9vw;
  }
  & > div {
    padding-left: 0.2vh;
    font-size: 0.9vw;
    width: 70%;
    background: white;
    text-align: center;
    font-weight: 700;
    color: black;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.6vh;
    font-weight: bold;
    height: min-content;
    & > i {
      font-size: 1.6vh;
    }
    & > div {
      font-size: 1.6vh;
    }
  }
`;

export const StandardTableCell = styled.div<{
  color?: string;
  backgroundColor?: string;
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
  font-weight: bold;

  & > i {
    width: 25%;
    margin-right: 0;
    padding: 0.5vh;
    box-sizing: border-box;
  }
  & > div {
    font-size: 1vw;
    font-weight: bold;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
    min-width: 90%;
    & > i {
    }
    & > div {
      padding-left: 0.3vh;
      font-size: 1.9vh;
      font-weight: bold;
    }
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

export const ParameterInput = styled.input`
  width: 30%;
`;

export const FillerIcon = styled.div`
  width: 16%;
  height: 100%;
  font-size: 4vh;
  @media only screen and (max-width: 1024px) {
    width: 23%;
  }
`;

export const DepthValue = styled.div`
  width: 80%;
  text-align: left;
  margin-left: 2vw;
  @media only screen and (max-width: 1024px) {
    margin-left: 0.1vh;
    width: 50%;
  }
`;
