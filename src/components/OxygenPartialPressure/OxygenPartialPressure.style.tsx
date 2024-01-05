import styled from "styled-components";

export const VerticalTable = styled.div`
  display: flex;
  height: 5vw;
  box-sizing: border-box;
  width: 84%;
  flex-direction: row;
  border-radius: 1vh;
  font-family: "Zen Dots";
  border: 1px solid white;
  padding: 0.5vw;
  position: relative;
  margin-top: 6vh;
  margin-right: 3.5;
  justify-content: space-between;
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
  border-radius: 0.3vw;
  padding: 1vh;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  border-radius: 0.3vw;
  box-sizing: border-box;
  font-size: 0.9vw;
  white-space: nowrap;
  min-width: 3vw;
  padding: 4px;
  background: #000000;
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
  }
`;

export const StandardTableCell = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
  width: 45%;
  height: 50%;
  align-items: center;
  border-radius: 20%;
  box-sizing: border-box;
  font-size: 80%;
  white-space: nowrap;
  min-width: min-content;
`;
