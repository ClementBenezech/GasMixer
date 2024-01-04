import styled from "styled-components";

export const VerticalTable = styled.div`
  display: flex;
  height: min-content;
  width: min-content;
  flex-direction: row;
  border-radius: 1vh;
  font-family: "Zen Dots";
  background-color: white;
  padding: 1vw;
  position: relative;
  margin-top: 6vh;
  margin-right: 3.5;

  @media only screen and (max-width: 1024px) {
    width: 80vw;
    height: max-content;
  }
`;

export const VerticalTableTitle = styled.div`
  display: flex;
  width: min-content;
  color: white;
  flex-direction: column;
  position: absolute;
  top: -5vh;
  left: 2vw;
  white-space: nowrap;
  background: orange;
  border-radius: 1vh;
  padding: 1vh;
`;

export const TableRow = styled.div`
  display: flex;
  height: 5vh;
  flex-direction: column;
  align-items: center;
  color: black;
  width: 3vw;
  z-index: 2;

  @media only screen and (max-width: 1024px) {
    height: 3vh;
  }
`;

export const TableCell = styled.div<{
  color?: string;
}>`
  color: ${(props) => props.color ?? "white"};
  border: 1px solid ${(props) => props.color ?? "white"};
  display: flex;
  justify-content: center;
  width: 45%;
  height: 50%;
  align-items: center;
  border: 5px solid white;
  border-radius: 2vh;
  box-sizing: border-box;
  font-size: 0.8vw;
  white-space: nowrap;
  min-width: min-content;
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
  }
`;

export const StandardTableCell = styled.div`
  display: flex;
  justify-content: center;
  color: #08a0ff;
  width: 45%;
  height: 50%;
  align-items: center;
  border: 5px solid white;
  border-radius: 20%;
  box-sizing: border-box;
  font-size: 70%;
  white-space: nowrap;
  min-width: min-content;
`;
