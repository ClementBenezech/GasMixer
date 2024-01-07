import DiveTank from "../DiveTank/DiveTank";
import MODcomponent from "../MODcomponent/MODcomponent";
import PPO2graph from "../PP02graph/PPO2graph";
import * as S from "./OxygenPartialPressure.style";

const OxygenPartialPressure = ({
  oxygenPercentage,
  tankGases,
}: {
  oxygenPercentage: number;
  tankGases: { percentage: number; color: string; name: string }[];
}) => {
  /*const depthArray = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
    95, 100,
  ];*/

  const depthArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const N2_PARTIALPRESSURE_IN_AIR_AT_1ATM = 0.79;

  console.log(tankGases);
  const currentGasNitrogenPartialPressureAtSurface =
    tankGases[0].percentage / 100;

  console.log(
    `currentGasNitrogenPartialPressureAtSurface: ${currentGasNitrogenPartialPressureAtSurface}`
  );

  const NarcoticRatio =
    1 +
    (currentGasNitrogenPartialPressureAtSurface -
      N2_PARTIALPRESSURE_IN_AIR_AT_1ATM) /
      N2_PARTIALPRESSURE_IN_AIR_AT_1ATM;

  console.log(`Narcotic Ratio: ${NarcoticRatio}`);
  const PPO2Data = [];
  const RenderedPP02Array = depthArray.map((depth) => {
    const minSafePPO2 = 0.16;
    const maxSafePPO2 = 1.4;
    const oxygenPartialPressure =
      Math.round(tankGases[1].percentage * (depth / 10 + 1)) / 100;

    const isPartialPressureSafe =
      oxygenPartialPressure >= minSafePPO2 &&
      oxygenPartialPressure <= maxSafePPO2;
    const PPO2Color = isPartialPressureSafe ? "#009d12" : "#bd0202";

    const NARCOTIC_DEPTH_TARGET = 40;

    PPO2Data.push({ x: oxygenPartialPressure, y: depth });

    const equivalentNarcoticDepth = Math.round(depth * NarcoticRatio);
    const isDepthNarcotic = equivalentNarcoticDepth > NARCOTIC_DEPTH_TARGET;
    const PPN2Color = isDepthNarcotic ? "#bd0202" : "#009d12";

    return (
      <S.TableRow>
        <S.StandardTableCell>{`${depth}`}</S.StandardTableCell>
        <S.TableCell color={PPN2Color}>{equivalentNarcoticDepth}</S.TableCell>

        <S.TableCell color={PPO2Color}>{oxygenPartialPressure}</S.TableCell>
      </S.TableRow>
    );
  });

  return (
    <>
      <S.VerticalTable>
        <S.TitleTableRow>
          <S.StandardTableCell>DEPTH</S.StandardTableCell>
          <S.StandardTableCell>Equivalent Narcotic Depth</S.StandardTableCell>
          <S.StandardTableCell>PPO2</S.StandardTableCell>
        </S.TitleTableRow>
        {RenderedPP02Array}
      </S.VerticalTable>
      <MODcomponent OxygenPercentage={oxygenPercentage} />
      <S.DiveTankAndGraphContainer>
        <PPO2graph PPO2DataSet={PPO2Data}></PPO2graph>
      </S.DiveTankAndGraphContainer>
    </>
  );
};
export default OxygenPartialPressure;
