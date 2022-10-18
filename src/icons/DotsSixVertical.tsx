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
    <circle cx="92" cy="60" r="16" />
    <circle cx="164" cy="60" r="16" />
    <circle cx="92" cy="128" r="16" />
    <circle cx="164" cy="128" r="16" />
    <circle cx="92" cy="196" r="16" />
    <circle cx="164" cy="196" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string, duocolor: string) => (
  <>
    <circle cx="92" cy="60" r="12" />
    <circle cx="164" cy="60" r="12" />
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <circle cx="92" cy="196" r="12" />
    <circle cx="164" cy="196" r="12" />
  </>
));

pathsByWeight.set("duocolor", (color: string, duocolor: string) => (
  <>
    <circle cx="92" cy="60" r="12" />
    <circle cx="164" cy="60" r="12" />
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <circle cx="92" cy="196" r="12" />
    <circle cx="164" cy="196" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z" />
  </>
));

pathsByWeight.set("light", (color: string, duocolor: string) => (
  <>
    <circle cx="92" cy="60" r="10" />
    <circle cx="164" cy="60" r="10" />
    <circle cx="92" cy="128" r="10" />
    <circle cx="164" cy="128" r="10" />
    <circle cx="92" cy="196" r="10" />
    <circle cx="164" cy="196" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string, duocolor: string) => (
  <>
    <circle cx="92" cy="60" r="8" />
    <circle cx="164" cy="60" r="8" />
    <circle cx="92" cy="128" r="8" />
    <circle cx="164" cy="128" r="8" />
    <circle cx="92" cy="196" r="8" />
    <circle cx="164" cy="196" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string, duocolor: string) => (
  <>
    <circle cx="92" cy="60" r="12" />
    <circle cx="164" cy="60" r="12" />
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <circle cx="92" cy="196" r="12" />
    <circle cx="164" cy="196" r="12" />
  </>
));

const renderPath: RenderFunction = (
  weight: IconWeight,
  color: string,
  duocolor: string
) => renderPathForWeight(weight, color, duocolor, pathsByWeight);

const DotsSixVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DotsSixVertical.displayName = "DotsSixVertical";

export default DotsSixVertical;
