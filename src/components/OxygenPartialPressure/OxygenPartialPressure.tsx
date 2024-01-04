import PPO2graph from "../PP02graph/PPO2graph";
import * as S from "./OxygenPartialPressure.style";

const OxygenPartialPressure = ({
  oxygenPercentage,
}: {
  oxygenPercentage: number;
}) => {
  console.log(oxygenPercentage);
  const depthArray = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
    95, 100,
  ];

  const PPO2Data = [];
  const RenderedPP02Array = depthArray.map((depth) => {
    const minSafePPO2 = 0.16;
    const maxSafePPO2 = 1.6;
    const oxygenPartialPressure =
      Math.round(oxygenPercentage * (depth / 10 + 1)) / 100;
    const isPartialPressureSafe =
      oxygenPartialPressure >= minSafePPO2 &&
      oxygenPartialPressure <= maxSafePPO2;
    const PPO2Color = isPartialPressureSafe ? "limegreen" : "red";

    PPO2Data.push({ x: oxygenPartialPressure, y: depth });
    return (
      <S.TableRow>
        <S.StandardTableCell>{`${depth}`}</S.StandardTableCell>
        <S.TableCell color={PPO2Color}>{oxygenPartialPressure}</S.TableCell>
      </S.TableRow>
    );
  });

  return (
    <>
      <S.VerticalTable>
        <S.VerticalTableTitle>PPO2 at</S.VerticalTableTitle>
        {RenderedPP02Array}
      </S.VerticalTable>
      <PPO2graph PPO2DataSet={PPO2Data}></PPO2graph>
    </>
  );
};
export default OxygenPartialPressure;
