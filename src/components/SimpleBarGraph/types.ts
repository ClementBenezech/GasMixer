import { Zones } from "../GasAnalysis/types";

export type SimpleBarGraphInnerProps = {
  zones: Zones;
  title: string;
  editParameterUnit: string;
  HelpMessage: JSX.Element;
  dangerIcon: JSX.Element;
  editParameterComponent: JSX.Element;
};

export type SimpleBarGraphPassedProps = React.HTMLAttributes<HTMLDivElement>;
export type SimpleBarGraphProps = SimpleBarGraphInnerProps &
  SimpleBarGraphPassedProps;
