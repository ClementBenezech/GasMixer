import styled from "styled-components";

export const ModContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: min-content;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: "shrikhand";
  font-size: 3vw;
  border-radius: 2vw;
  overflow: hidden;
  color: black;
  margin-right: 2vw;
  width: 70%;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 5vh;
  }
`;

export const MODcard = styled.div`
  color: #474747;
  font-size: 3vh;
  display: flex;
  align-items: center;
  width: 32%;
  gap: 3;
  padding: 1.5vh;
  background: orange;
  height: 100%;
  &:nth-child(1) {
    background: white;
  }

  & > div {
    width: 100%;
    background: white;
    white-space: nowrap;
    padding: 1vh;
    border-radius: 1vh;
    &:nth-child(odd) {
      background: orange;
      color: white;
    }
  }
`;

export const MessageCard = styled.div`
  color: #474747;
  font-size: 2.5vh;
  text-align: left;
  display: flex;
  align-items: flex-start;
  width: 48%;
  gap: 4;
  padding: 1.5vh;
  width: 50%;
  background: white;
  font-size: 1vw;
  height: 100%;
  border-radius: 2vw;
  position: relative;
  left: -0.3vw;
  & > div {
    width: 100%;
    background: white;
    white-space: nowrap;
    padding: 1vh;
    border-radius: 1vh;
    &:nth-child(odd) {
      color: white;
    }
  }
`;

export const MODlabel = styled.div`
  font-size: 0.9vw;
  white-space: break-spaces;
  width: 100%;
  background: red;
`;
