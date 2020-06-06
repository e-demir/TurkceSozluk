import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVolume(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="white"
      stroke="#48515B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <Path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
    </Svg>
  );
}

export default SvgVolume;
