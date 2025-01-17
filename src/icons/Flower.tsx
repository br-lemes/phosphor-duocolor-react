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
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
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
      d="M115,103.2a28,28,0,0,1,26,0h0c7.3-15.4,15-34.6,15-47.2a28,28,0,0,0-56,0c0,12.6,7.7,31.8,15,47.2Z"
      opacity="0.2"
    />
    <path
      d="M100,126.8a27.8,27.8,0,0,1,3.8-12.8,26.5,26.5,0,0,1,9.2-9.6h0C103.3,90.3,90.5,74,79.6,67.8a28,28,0,0,0-28,48.4c10.9,6.3,31.4,9.3,48.4,10.6Z"
      opacity="0.2"
    />
    <path
      d="M113,151.6a26.5,26.5,0,0,1-9.2-9.6,27.8,27.8,0,0,1-3.8-12.8h0c-17,1.3-37.5,4.3-48.4,10.6a28,28,0,1,0,28,48.4c10.9-6.2,23.7-22.5,33.4-36.6Z"
      opacity="0.2"
    />
    <path
      d="M141,152.8a28,28,0,0,1-26,0h0c-7.3,15.4-15,34.6-15,47.2a28,28,0,0,0,56,0c0-12.6-7.7-31.8-15-47.2Z"
      opacity="0.2"
    />
    <path
      d="M156,129.2a27.8,27.8,0,0,1-3.8,12.8,26.5,26.5,0,0,1-9.2,9.6h0c9.7,14.1,22.5,30.4,33.4,36.6a28,28,0,0,0,28-48.4c-10.9-6.3-31.4-9.3-48.4-10.6Z"
      opacity="0.2"
    />
    <path
      d="M143,104.4a26.5,26.5,0,0,1,9.2,9.6,27.8,27.8,0,0,1,3.8,12.8h0c17-1.3,37.5-4.3,48.4-10.6a28,28,0,0,0-28-48.4C165.5,74,152.7,90.3,143,104.4Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="128"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
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
      d="M115,103.2a28,28,0,0,1,26,0h0c7.3-15.4,15-34.6,15-47.2a28,28,0,0,0-56,0c0,12.6,7.7,31.8,15,47.2Z"
      fill={duocolor}
    />
    <path
      d="M100,126.8a27.8,27.8,0,0,1,3.8-12.8,26.5,26.5,0,0,1,9.2-9.6h0C103.3,90.3,90.5,74,79.6,67.8a28,28,0,0,0-28,48.4c10.9,6.3,31.4,9.3,48.4,10.6Z"
      fill={duocolor}
    />
    <path
      d="M113,151.6a26.5,26.5,0,0,1-9.2-9.6,27.8,27.8,0,0,1-3.8-12.8h0c-17,1.3-37.5,4.3-48.4,10.6a28,28,0,1,0,28,48.4c10.9-6.2,23.7-22.5,33.4-36.6Z"
      fill={duocolor}
    />
    <path
      d="M141,152.8a28,28,0,0,1-26,0h0c-7.3,15.4-15,34.6-15,47.2a28,28,0,0,0,56,0c0-12.6-7.7-31.8-15-47.2Z"
      fill={duocolor}
    />
    <path
      d="M156,129.2a27.8,27.8,0,0,1-3.8,12.8,26.5,26.5,0,0,1-9.2,9.6h0c9.7,14.1,22.5,30.4,33.4,36.6a28,28,0,0,0,28-48.4c-10.9-6.3-31.4-9.3-48.4-10.6Z"
      fill={duocolor}
    />
    <path
      d="M143,104.4a26.5,26.5,0,0,1,9.2,9.6,27.8,27.8,0,0,1,3.8,12.8h0c17-1.3,37.5-4.3,48.4-10.6a28,28,0,0,0-28-48.4C165.5,74,152.7,90.3,143,104.4Z"
      fill={duocolor}
    />
    <circle
      cx="128"
      cy="128"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
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
    <path d="M208.4,132.8a56.9,56.9,0,0,0-11.5-4.8,56.9,56.9,0,0,0,11.5-4.8,36,36,0,0,0-36-62.4,58.7,58.7,0,0,0-9.9,7.5A58.6,58.6,0,0,0,164,56a36,36,0,0,0-72,0,58.6,58.6,0,0,0,1.5,12.3,58.7,58.7,0,0,0-9.9-7.5,36,36,0,0,0-36,62.4A56.9,56.9,0,0,0,59.1,128a56.9,56.9,0,0,0-11.5,4.8,36,36,0,0,0,36,62.4,58.7,58.7,0,0,0,9.9-7.5A58.6,58.6,0,0,0,92,200a36,36,0,0,0,72,0,58.6,58.6,0,0,0-1.5-12.3,58.7,58.7,0,0,0,9.9,7.5,36,36,0,0,0,36-62.4ZM128,152a24,24,0,1,1,24-24A24.1,24.1,0,0,1,128,152Z" />
  </>
));

pathsByWeight.set("light", (color: string, duocolor: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
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
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
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
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
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

const Flower = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Flower.displayName = "Flower";

export default Flower;
