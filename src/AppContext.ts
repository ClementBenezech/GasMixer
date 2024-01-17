import { createContext } from "react";
import { getTankGases } from "./components/utils/functions";
import { TankGases } from "./components/TankMixer/types";

export type GasPercentages = {
  oxygen: number;
  nitrogen: number;
  helium: number;
};

export type AppSettings = {
  equivalentNarcoticDepth: number;
  lowestOxygenPartialPressure: number;
  highestOxygenPartialPressure: number;
  isOxygenNarcotic: boolean;
  depthUnit: {
    label: string;
    shortLabel: string;
  };
};

export type DataContext = {
  appSettings: AppSettings;
  gasPercentages: GasPercentages;
  tankGases: TankGases;
};

//Initial Gases in the mix
const defaultGasPercentages: GasPercentages = {
  oxygen: 21,
  nitrogen: 79,
  helium: 0,
};

const defaultAppSettings: AppSettings = {
  equivalentNarcoticDepth: 40,
  lowestOxygenPartialPressure: 0.18,
  highestOxygenPartialPressure: 1.4,
  isOxygenNarcotic: false,
  depthUnit: {
    label: "meters",
    shortLabel: "m",
  },
};

// Generating initial context with initial gases
export const defaultContext = {
  gasPercentages: defaultGasPercentages,
  tankGases: getTankGases(defaultGasPercentages),
  appSettings: defaultAppSettings,
};

// Initializing context object.
export const AppContext = createContext({
  appData: defaultContext,
  setAppData: (data: DataContext) => {
    console.log(data);
  },
});
