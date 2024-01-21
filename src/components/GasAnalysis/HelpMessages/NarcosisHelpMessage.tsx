import useThemeColors from "../../utils/hooks/useThemeColors";

const NarcosisHelpMessage = () => {
  const { dangerColor } = useThemeColors();

  return (
    <div>
      <h3 style={{ color: dangerColor }}>Target END</h3>
      <p>
        Use the Slider to select your target maximum Equivalent Narcotic Depth
      </p>
      <p>
        This Value is very specific to each diver. You should select a depth at
        which, on air, you don't get the effects of nitrogen narcosis.
      </p>
      <p>
        The higher the Equivalent Narcotic Depth, the deeper a specific mix can
        take you safely
      </p>
      <p>
        For a specific dive at a given depth, if you accept a deeper END, then
        you can use a mix with less Helium and more Nitrogen
      </p>
      <p>
        This app lets you choose wether or not you want to consider oxygen
        narcotic.
      </p>
    </div>
  );
};

export default NarcosisHelpMessage;
