import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChevronLeft(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <Path d="M15 18l-6-6 6-6" />
    </Svg>
  );
}

export default SvgChevronLeft;
