import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSendBlack(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <Path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </Svg>
  );
}

export default SvgSendBlack;
