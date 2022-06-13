import React from "react";
import Link from "next/link";
import cn from "classnames";

import s from "./Button.module.scss";
import LoadingSpinner from "@components/ui/LoadingSpinner";

type BaseProps = {
  /** Controls button appearance */
  variant?: "filled" | "outline" | "subtle";
  /** Predefined button size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Predefined button color */
  color?: "primary" | "secondary";
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** Button label */
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
};

type WithLink = {
  as?: "link";
  href?: string;
  onClick?: never;
};

type WithoutLink = {
  as?: "button";
  href?: never;
  onClick?: () => void;
};

export type ButtonProps = BaseProps & (WithLink | WithoutLink);

const Button = React.forwardRef<any, ButtonProps>((props, ref) => {
  const {
    children,
    variant = "outline",
    as = "button",
    href,
    size = "sm",
    color = "secondary",
    loading = false,
    fullWidth = false,
    className,
    startIcon,
    endIcon,
    ...rest
  } = props;

  const classes = cn(
    s.base,
    s[size],
    s[variant],
    s[color],
    fullWidth && s.fullWidth,
    className
  );

  switch (as) {
    case "button":
      return (
        <button ref={ref} className={classes} {...rest}>
          {startIcon && <span className={s.startIcon}>{startIcon}</span>}
          {children}
          {endIcon && <span className={s.endIcon}>{endIcon}</span>}
          {loading && (
            <span className="ml-2">
              <LoadingSpinner />
            </span>
          )}
        </button>
      );
    case "link":
      return (
        <Link href={href!} passHref>
          <a className={classes} {...rest}>
            {children} {endIcon}
          </a>
        </Link>
      );
  }
});

Button.displayName = "Button";
export default Button;
