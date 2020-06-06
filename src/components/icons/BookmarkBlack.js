import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBookmarkBlack(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="#C01A34"
      stroke="#C01A34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <Path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </Svg>
  );
}

export default SvgBookmarkBlack;
