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
    <rect
      x="52"
      y="52"
      width="152"
      height="152"
      rx="6.9"
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
    <rect x="52" y="52" width="152" height="152" rx="6.9" opacity="0.2" />
    <rect
      x="52"
      y="52"
      width="152"
      height="152"
      rx="6.9"
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
    <rect x="52" y="52" width="152" height="152" rx="6.9" fill={duocolor} />
    <rect
      x="52"
      y="52"
      width="152"
      height="152"
      rx="6.9"
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
    <rect x="44" y="44" width="168" height="168" rx="14.9" />
  </>
));

pathsByWeight.set("light", (color: string, duocolor: string) => (
  <>
    <rect
      x="52"
      y="52"
      width="152"
      height="152"
      rx="6.9"
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
    <rect
      x="52"
      y="52"
      width="152"
      height="152"
      rx="6.9"
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
    <rect
      x="52"
      y="52"
      width="152"
      height="152"
      rx="6.9"
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

const Stop = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Stop.displayName = "Stop";

export default Stop;
