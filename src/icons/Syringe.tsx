/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string, duocolor: string) => (
  <>
    <line
      x1="184"
      y1="24"
      x2="232"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="48"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M140,60,50.3,149.7a7.9,7.9,0,0,0-2.3,5.6V208h52.7a7.9,7.9,0,0,0,5.6-2.3L196,116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="102"
      y1="98"
      x2="128"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="74"
      y1="126"
      x2="100"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="168"
      y1="88"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="48"
      y1="208"
      x2="24"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string, duocolor: string) => (
  <>
    <path
      d="M140,60,50.3,149.7a7.9,7.9,0,0,0-2.3,5.6V208h52.7a7.9,7.9,0,0,0,5.6-2.3L196,116Z"
      opacity="0.2"
    />
    <line
      x1="184"
      y1="24"
      x2="232"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="48"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M140,60,50.3,149.7a7.9,7.9,0,0,0-2.3,5.6V208h52.7a7.9,7.9,0,0,0,5.6-2.3L196,116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="102"
      y1="98"
      x2="128"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="74"
      y1="126"
      x2="100"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="88"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="208"
      x2="24"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("duocolor", (color: string, duocolor: string) => (
  <>
    <path
      d="M140,60,50.3,149.7a7.9,7.9,0,0,0-2.3,5.6V208h52.7a7.9,7.9,0,0,0,5.6-2.3L196,116Z"
      fill={duocolor}
    />
    <line
      x1="184"
      y1="24"
      x2="232"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="48"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M140,60,50.3,149.7a7.9,7.9,0,0,0-2.3,5.6V208h52.7a7.9,7.9,0,0,0,5.6-2.3L196,116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="102"
      y1="98"
      x2="128"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="74"
      y1="126"
      x2="100"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="88"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="208"
      x2="24"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M237.7,77.7a8.2,8.2,0,0,1-11.4,0L208,59.3,179.3,88l34.4,34.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0l-6.3-6.4-84,84a16.1,16.1,0,0,1-11.3,4.7H51.3L29.7,237.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L40,204.7V155.3A16.1,16.1,0,0,1,44.7,144l11.2-11.2a4,4,0,0,1,5.6,0l28.8,28.9a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4L72.8,121.5a4,4,0,0,1,0-5.6L91.9,96.8a4,4,0,0,1,5.6,0l28.8,28.9a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4L108.8,85.5a4,4,0,0,1,0-5.6L128.7,60l-6.1-6.1a8.3,8.3,0,0,1-.4-11.4,8.1,8.1,0,0,1,11.5-.2L168,76.7,196.7,48,178.6,29.9a8.3,8.3,0,0,1-.4-11.4,8.1,8.1,0,0,1,11.5-.2l48,48A8.1,8.1,0,0,1,237.7,77.7Z" />
  </>
));

pathsByWeight.set("light", (color: string, duocolor: string) => (
  <>
    <line
      x1="184"
      y1="24"
      x2="232"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="48"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M140,60,50.3,149.7a7.9,7.9,0,0,0-2.3,5.6V208h52.7a7.9,7.9,0,0,0,5.6-2.3L196,116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="102"
      y1="98"
      x2="128"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="74"
      y1="126"
      x2="100"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="168"
      y1="88"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="48"
      y1="208"
      x2="24"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string, duocolor: string) => (
  <>
    <line
      x1="184"
      y1="24"
      x2="232"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="48"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M140,60,50.3,149.7a7.9,7.9,0,0,0-2.3,5.6V208h52.7a7.9,7.9,0,0,0,5.6-2.3L196,116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="102"
      y1="98"
      x2="128"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="74"
      y1="126"
      x2="100"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="168"
      y1="88"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="48"
      y1="208"
      x2="24"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string, duocolor: string) => (
  <>
    <line
      x1="184"
      y1="24"
      x2="232"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="48"
      x2="208"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M140,60,50.3,149.7a7.9,7.9,0,0,0-2.3,5.6V208h52.7a7.9,7.9,0,0,0,5.6-2.3L196,116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="102"
      y1="98"
      x2="128"
      y2="124"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="74"
      y1="126"
      x2="100"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="88"
      x2="208"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="208"
      x2="24"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (
  weight: IconWeight,
  color: string,
  duocolor: string
) => renderPathForWeight(weight, color, duocolor, pathsByWeight);

const Syringe = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Syringe.displayName = "Syringe";

export default Syringe;
