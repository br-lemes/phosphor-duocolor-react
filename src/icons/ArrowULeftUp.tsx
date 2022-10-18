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
    <polyline
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32"
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
    <polyline
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32"
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
    <polyline
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32"
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
    <path d="M208,80v88a64,64,0,0,1-128,0V88H40a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l48-48a8.1,8.1,0,0,1,11.4,0l48,48a8.4,8.4,0,0,1,1.7,8.8A8,8,0,0,1,136,88H96v80a48,48,0,0,0,96,0V80a8,8,0,0,1,16,0Z" />
  </>
));

pathsByWeight.set("light", (color: string, duocolor: string) => (
  <>
    <polyline
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32"
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
    <polyline
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32"
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
    <polyline
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h0a56,56,0,0,1-56-56V32"
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

const ArrowULeftUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowULeftUp.displayName = "ArrowULeftUp";

export default ArrowULeftUp;
