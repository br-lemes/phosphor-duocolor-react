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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M71,205.3A160.1,160.1,0,0,1,208,128c5.4,0,10.7.3,16,.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M188,53.1A159.8,159.8,0,0,1,64,112a165.2,165.2,0,0,1-30.1-2.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M85.9,41.7a160.5,160.5,0,0,1,74.3,176.8"
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
    <circle cx="128" cy="128" r="96" opacity="0.2" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M71,205.3A160.1,160.1,0,0,1,208,128c5.4,0,10.7.3,16,.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188,53.1A159.8,159.8,0,0,1,64,112a165.2,165.2,0,0,1-30.1-2.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M85.9,41.7a160.5,160.5,0,0,1,74.3,176.8"
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
    <circle cx="128" cy="128" r="96" fill={duocolor} />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M71,205.3A160.1,160.1,0,0,1,208,128c5.4,0,10.7.3,16,.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188,53.1A159.8,159.8,0,0,1,64,112a165.2,165.2,0,0,1-30.1-2.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M85.9,41.7a160.5,160.5,0,0,1,74.3,176.8"
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
    <path d="M93.3,36.9a4,4,0,0,1,.8-7.2,103.7,103.7,0,0,1,88.6,9.9,4,4,0,0,1,1.1,5.9,156.1,156.1,0,0,1-41.9,37A169,169,0,0,0,93.3,36.9ZM127.6,90a154.2,154.2,0,0,0-56-46.9,4.3,4.3,0,0,0-4.1.3A105.1,105.1,0,0,0,29.2,95.5a4,4,0,0,0,3,5.1A151.1,151.1,0,0,0,64,104,150.6,150.6,0,0,0,127.6,90Zm103.8,26.7a104,104,0,0,0-29.2-61.5,4.1,4.1,0,0,0-6,.3,168.3,168.3,0,0,1-45.7,40.4,171.5,171.5,0,0,1,13.6,29.9A167.3,167.3,0,0,1,208,120a171.5,171.5,0,0,1,19,1.1A4,4,0,0,0,231.4,116.7Zm-62.9,24.5a169,169,0,0,1,4.4,38.5,168.1,168.1,0,0,1-4.1,36.8,4,4,0,0,0,5.7,4.5,104.1,104.1,0,0,0,56.6-79.2,4,4,0,0,0-3.5-4.5A141.3,141.3,0,0,0,208,136,151.2,151.2,0,0,0,168.5,141.2Zm-19.7-10.4a142.6,142.6,0,0,0-12.4-27.2A167.2,167.2,0,0,1,64,120a167.3,167.3,0,0,1-34.9-3.7,4,4,0,0,0-4.8,3.6q-.3,4-.3,8.1a103.7,103.7,0,0,0,33,75.9,3.9,3.9,0,0,0,6.1-.9A168.8,168.8,0,0,1,148.8,130.8ZM75.7,213.2a4,4,0,0,0,1.5,5.5A102.9,102.9,0,0,0,128,232a98.3,98.3,0,0,0,18.1-1.6,3.8,3.8,0,0,0,3-2.6,151,151,0,0,0,7.8-48.1,154.2,154.2,0,0,0-3.7-33.5A153.2,153.2,0,0,0,75.7,213.2Z" />
  </>
));

pathsByWeight.set("light", (color: string, duocolor: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M71,205.3A160.1,160.1,0,0,1,208,128c5.4,0,10.7.3,16,.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M188,53.1A159.8,159.8,0,0,1,64,112a165.2,165.2,0,0,1-30.1-2.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M85.9,41.7a160.5,160.5,0,0,1,74.3,176.8"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M71,205.3A160.1,160.1,0,0,1,208,128c5.4,0,10.7.3,16,.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M188,53.1A159.8,159.8,0,0,1,64,112a165.2,165.2,0,0,1-30.1-2.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M85.9,41.7a160.5,160.5,0,0,1,74.3,176.8"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M71,205.3A160.1,160.1,0,0,1,208,128c5.4,0,10.7.3,16,.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188,53.1A159.8,159.8,0,0,1,64,112a165.2,165.2,0,0,1-30.1-2.8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M85.9,41.7a160.5,160.5,0,0,1,74.3,176.8"
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

const DribbbleLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DribbbleLogo.displayName = "DribbbleLogo";

export default DribbbleLogo;
