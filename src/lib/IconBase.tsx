import React, { forwardRef, useContext } from "react";
import { IconProps, IconWeight, IconContext } from "../lib";

export type RenderFunction = (
  weight: IconWeight,
  color: string,
  duocolor: string
) => React.ReactNode | null;

interface IconBaseProps extends IconProps {
  renderPath: RenderFunction;
}

const IconBase = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  const {
    alt,
    color,
    size,
    weight,
    mirrored,
    duocolor,
    children,
    renderPath,
    ...restProps
  } = props;

  const {
    color: contextColor = "currentColor",
    size: contextSize,
    weight: contextWeight = "regular",
    mirrored: contextMirrored = false,
    duocolor: contextDuocolor = "currentColor",
    ...restContext
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...restContext}
      {...restProps}
    >
      {!!alt && <title>{alt}</title>}
      {children}
      <rect width="256" height="256" fill="none" />
      {renderPath(
        weight ?? contextWeight,
        color ?? contextColor,
        duocolor ?? contextDuocolor
      )}
    </svg>
  );
});

IconBase.displayName = "IconBase";

export default IconBase;
