import { useContext } from "react";
import { themes } from "../constants";
import { AppContext } from "../../../AppContext";

const useThemeColors = () => {
  const { appData } = useContext(AppContext);
  return themes[appData.appSettings.theme];
};

export default useThemeColors;
