import useThemeColors from "../../utils/hooks/useThemeColors";
import { ExternalLink } from "./ToxicityHelpMessage";

const NarcosisHelpMessage = () => {
  const { dangerColor } = useThemeColors();

  return (
    <div style={{ textAlign: "justify" }}>
      <h3 style={{ color: dangerColor }}>Target END</h3>
      <p>
        Use the Slider to select your target maximum Equivalent Narcotic Depth
      </p>
      <p>
        This Value is very specific to each diver. You should in theory select a
        depth at which, on air, you don't get the effects of nitrogen narcosis.
      </p>
      <p>
        The higher the Equivalent Narcotic Depth, the deeper a specific mix can
        take you safely. You can add a fraction of helium, which is
        non-narcotic, to extend your maximum depth
      </p>
      <p>
        For a specific dive at a given depth, if you accept a deeper END, then
        you can use a mix with less Helium and more Nitrogen
      </p>
      <p>
        This app gives you the freedom to choose whether or not you want to
        consider oxygen narcotic
      </p>
      <ExternalLink href="https://en.wikipedia.org/wiki/Equivalent_narcotic_depth">
        <span>Learn more on Wikipedia.org</span>
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </ExternalLink>
    </div>
  );
};

export default NarcosisHelpMessage;
