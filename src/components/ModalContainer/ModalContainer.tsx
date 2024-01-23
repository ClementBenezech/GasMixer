import { ReactNode } from "react";
import styled from "styled-components";
import useThemeColors from "../utils/hooks/useThemeColors";

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
const Content = styled.div<{ buttonColor?: string }>`
  background: white;
  color: black;
  height: min-content;
  width: 50vw;
  padding: 2vh 2vw;
  font-family: "Roboto";
  border-radius: 0.5vh;
  @media only screen and (max-width: 1024px) {
    width: 80vw;
  }
  & > button {
    background-color: ${(props) => props.buttonColor};
  }
`;

export const ModalContainer = ({
  children,
  onClose,
  closeButtonLabel,
}: {
  children: ReactNode;
  onClose: () => void;
  closeButtonLabel?: string;
}) => {
  const { dangerColor } = useThemeColors();
  return closeButtonLabel ? (
    <ContainerOverlay>
      <Content buttonColor={dangerColor}>
        {children}
        <button onClick={onClose}>{closeButtonLabel}</button>
      </Content>
    </ContainerOverlay>
  ) : (
    <ContainerOverlay onClick={onClose}>
      <Content>{children}</Content>
    </ContainerOverlay>
  );
};

export default ModalContainer;
