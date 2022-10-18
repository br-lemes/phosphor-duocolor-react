import { createContext, ComponentPropsWithoutRef } from "react";

export type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone"
  | "duocolor";

export type PaintFunction = (
  color: string,
  duocolor: string
) => React.ReactNode | null;

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
  duocolor?: string;
}

type IconComponentProps = IconProps & React.RefAttributes<SVGSVGElement>;

export type Icon = React.ForwardRefExoticComponent<IconComponentProps>;

export const IconContext = createContext<IconProps>({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
  duocolor: "currentColor",
});

export const renderPathForWeight = (
  weight: IconWeight,
  color: string,
  duocolor: string,
  pathsByWeight: Map<IconWeight, PaintFunction>
): React.ReactNode | null => {
  const path = pathsByWeight.get(weight);
  if (!!path) return path(color, duocolor);

  console.error(
    'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", "duotone", or "duocolor".'
  );

  return null;
};
