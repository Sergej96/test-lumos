import styles from "./Button.module.css";
import { classnames } from "@/shared/lib/classnames";
import { FC, PropsWithChildren, memo } from "react";

type ButtonTheme = "primary" | "secondary";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement> {
  rounded?: boolean;
  theme?: ButtonTheme;
  size?: boolean;
}

export const ButtonComponent: FC<PropsWithChildren<ButtonProps>> = ({
  type = "button",
  className = "",
  children,
  theme = "primary",
  disabled,
  rounded = false,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classnames(styles.button, className, styles[theme], {
        [styles.rounded]: rounded,
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
