import { FC, PropsWithChildren, createElement } from "react";
import styles from "./Typography.module.css";

type VariantType = "xxl" | "xl" | "lg" | "md" | "base" | "sm" | "xs" | "xxs";
const VariantObj: Record<VariantType, { className: string; type: string }> = {
  xxl: {
    className: "xxl",
    type: "h1",
  },
  xl: {
    className: "xl",
    type: "h2",
  },
  lg: {
    className: "lg",
    type: "h3",
  },
  md: {
    className: "md",
    type: "h4",
  },
  base: {
    className: "base",
    type: "p",
  },
  sm: {
    className: "sm",
    type: "p",
  },
  xs: {
    className: "xs",
    type: "span",
  },
  xxs: {
    className: "xxs",
    type: "span",
  },
};

interface TypographyProps {
  variant?: VariantType;
  className?: string;
}

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  variant = "base",
  className = "",
}) => {
  const currentVariant = VariantObj[variant];

  return createElement(
    currentVariant.type,
    {
      className: `${styles[currentVariant.className]} ${className}`,
    },
    children
  );
};
