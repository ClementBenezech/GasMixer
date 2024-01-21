import { ReactNode } from "react";
import styled from "styled-components";

const ContainerOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #0000006a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;
const Content = styled.div`
  background: white;
  color: black;
  height: min-content;
  width: 80vw;
  padding: 2vh 2vw;
  font-family: "Roboto";
  border-radius: 1vw;
`;

export const ModalContainer = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <ContainerOverlay onClick={onClose}>
      <Content>{children}</Content>
    </ContainerOverlay>
  );
};

export default ModalContainer;
