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
    <circle cx="128" cy="64" r="16" />
    <circle cx="128" cy="128" r="16" />
    <circle cx="128" cy="192" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string, duocolor: string) => (
  <>
    <circle cx="128" cy="128" r="12" />
    <circle cx="128" cy="64" r="12" />
    <circle cx="128" cy="192" r="12" />
  </>
));

pathsByWeight.set("duocolor", (color: string, duocolor: string) => (
  <>
    <circle cx="128" cy="128" r="12" />
    <circle cx="128" cy="64" r="12" />
    <circle cx="128" cy="192" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,76a12,12,0,1,0-12-12A12,12,0,0,0,128,76Zm0,104a12,12,0,1,0,12,12A12,12,0,0,0,128,180Z" />
  </>
));

pathsByWeight.set("light", (color: string, duocolor: string) => (
  <>
    <circle cx="128" cy="64" r="10" />
    <circle cx="128" cy="128" r="10" />
    <circle cx="128" cy="192" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string, duocolor: string) => (
  <>
    <circle cx="128" cy="64" r="8" />
    <circle cx="128" cy="128" r="8" />
    <circle cx="128" cy="192" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string, duocolor: string) => (
  <>
    <circle cx="128" cy="128" r="12" />
    <circle cx="128" cy="64" r="12" />
    <circle cx="128" cy="192" r="12" />
  </>
));

const renderPath: RenderFunction = (
  weight: IconWeight,
  color: string,
  duocolor: string
) => renderPathForWeight(weight, color, duocolor, pathsByWeight);

const DotsThreeVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DotsThreeVertical.displayName = "DotsThreeVertical";

export default DotsThreeVertical;
