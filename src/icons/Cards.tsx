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
      x="28"
      y="84"
      width="160"
      height="128"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M64,44H220a8,8,0,0,1,8,8V176"
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
    <rect x="32" y="80" width="160" height="128" rx="8" opacity="0.2" />
    <rect
      x="32"
      y="80"
      width="160"
      height="128"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,48H216a8,8,0,0,1,8,8V176"
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
    <rect x="32" y="80" width="160" height="128" rx="8" fill={duocolor} />
    <rect
      x="32"
      y="80"
      width="160"
      height="128"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,48H216a8,8,0,0,1,8,8V176"
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
    <rect x="24" y="72" width="176" height="144" rx="16" />
    <path d="M216,40H64a8,8,0,0,0,0,16H216V176a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Z" />
  </>
));

pathsByWeight.set("light", (color: string, duocolor: string) => (
  <>
    <rect
      x="32"
      y="80"
      width="160"
      height="128"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M64,48H216a8,8,0,0,1,8,8V176"
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
      x="32"
      y="80"
      width="160"
      height="128"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M64,48H216a8,8,0,0,1,8,8V176"
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
      x="32"
      y="80"
      width="160"
      height="128"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,48H216a8,8,0,0,1,8,8V176"
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

const Cards = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Cards.displayName = "Cards";

export default Cards;
