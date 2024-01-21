import styled from "styled-components";
import { themes } from "../utils/constants";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const ThemeSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  height: 4vh;
  margin: 0 2vw;
  width: min-content;

  & > i {
    font-size: 2vw;
    position: relative;
    bottom: -1vh;
    transform: rotate(230deg);
    @media only screen and (max-width: 1024px) {
      width: 2vh;
      height: 2vh;
      font-size: 2vh;
      position: static;
    }
  }
`;
const ColorBoxContainer = styled.div`
  display: flex;
  border-radius: 0.2vw;
`;

const ColorBox = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  width: 2vw;
  height: 2vw;
  border-radius: 0.3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(2) {
    position: relative;
    left: -1vw;
    top: 1vw;
  }
  @media only screen and (max-width: 1024px) {
    width: 2vh;
    height: 2vh;
  }
`;

const ThemeSelector = () => {
  const { appData, setAppData } = useContext(AppContext);

  const ThemeSelectors = Object.entries(themes).map((theme) => {
    const setThemeContextValue = (e: React.MouseEvent<HTMLElement>) => {
      const newSettings = {
        ...appData.appSettings,
        theme: e.currentTarget.id,
      };

      const newContext = { ...appData, appSettings: newSettings };

      setAppData(newContext);
    };

    return (
      <ColorBoxContainer id={theme[0]} onClick={setThemeContextValue}>
        <ColorBox color={theme[1].dangerColor}></ColorBox>
        <ColorBox color={theme[1].safeColor}>
          {appData.appSettings.theme === theme[0] && (
            <i className="fa-solid fa-star"></i>
          )}
        </ColorBox>
      </ColorBoxContainer>
    );
  });
  return (
    <ThemeSelectorContainer>
      {ThemeSelectors}
      <i className="fa-solid fa-brush"></i>
    </ThemeSelectorContainer>
  );
};

export default ThemeSelector;
