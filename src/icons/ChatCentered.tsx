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
    <path
      d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
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
      d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
      opacity="0.2"
    />
    <path
      d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
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
      d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
      fill={duocolor}
    />
    <path
      d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
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
    <path d="M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H99.5l14.8,24.7a16,16,0,0,0,27.4,0L156.5,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z" />
  </>
));

pathsByWeight.set("light", (color: string, duocolor: string) => (
  <>
    <path
      d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
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
    <path
      d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
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
    <path
      d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
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

const ChatCentered = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ChatCentered.displayName = "ChatCentered";

export default ChatCentered;
