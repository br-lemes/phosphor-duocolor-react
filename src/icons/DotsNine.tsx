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
    <circle cx="60" cy="60" r="16" />
    <circle cx="128" cy="60" r="16" />
    <circle cx="196" cy="60" r="16" />
    <circle cx="60" cy="128" r="16" />
    <circle cx="128" cy="128" r="16" />
    <circle cx="196" cy="128" r="16" />
    <circle cx="60" cy="196" r="16" />
    <circle cx="128" cy="196" r="16" />
    <circle cx="196" cy="196" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string, duocolor: string) => (
  <>
    <circle cx="60" cy="60" r="12" />
    <circle cx="128" cy="60" r="12" />
    <circle cx="196" cy="60" r="12" />
    <circle cx="60" cy="128" r="12" />
    <circle cx="128" cy="128" r="12" />
    <circle cx="196" cy="128" r="12" />
    <circle cx="60" cy="196" r="12" />
    <circle cx="128" cy="196" r="12" />
    <circle cx="196" cy="196" r="12" />
  </>
));

pathsByWeight.set("duocolor", (color: string, duocolor: string) => (
  <>
    <circle cx="60" cy="60" r="12" />
    <circle cx="128" cy="60" r="12" />
    <circle cx="196" cy="60" r="12" />
    <circle cx="60" cy="128" r="12" />
    <circle cx="128" cy="128" r="12" />
    <circle cx="196" cy="128" r="12" />
    <circle cx="60" cy="196" r="12" />
    <circle cx="128" cy="196" r="12" />
    <circle cx="196" cy="196" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M60,48A12,12,0,1,0,72,60,12,12,0,0,0,60,48Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116Z" />
  </>
));

pathsByWeight.set("light", (color: string, duocolor: string) => (
  <>
    <circle cx="60" cy="60" r="10" />
    <circle cx="128" cy="60" r="10" />
    <circle cx="196" cy="60" r="10" />
    <circle cx="60" cy="128" r="10" />
    <circle cx="128" cy="128" r="10" />
    <circle cx="196" cy="128" r="10" />
    <circle cx="60" cy="196" r="10" />
    <circle cx="128" cy="196" r="10" />
    <circle cx="196" cy="196" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string, duocolor: string) => (
  <>
    <circle cx="60" cy="60" r="8" />
    <circle cx="128" cy="60" r="8" />
    <circle cx="196" cy="60" r="8" />
    <circle cx="60" cy="128" r="8" />
    <circle cx="128" cy="128" r="8" />
    <circle cx="196" cy="128" r="8" />
    <circle cx="60" cy="196" r="8" />
    <circle cx="128" cy="196" r="8" />
    <circle cx="196" cy="196" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string, duocolor: string) => (
  <>
    <circle cx="60" cy="60" r="12" />
    <circle cx="128" cy="60" r="12" />
    <circle cx="196" cy="60" r="12" />
    <circle cx="60" cy="128" r="12" />
    <circle cx="128" cy="128" r="12" />
    <circle cx="196" cy="128" r="12" />
    <circle cx="60" cy="196" r="12" />
    <circle cx="128" cy="196" r="12" />
    <circle cx="196" cy="196" r="12" />
  </>
));

const renderPath: RenderFunction = (
  weight: IconWeight,
  color: string,
  duocolor: string
) => renderPathForWeight(weight, color, duocolor, pathsByWeight);

const DotsNine = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DotsNine.displayName = "DotsNine";

export default DotsNine;
