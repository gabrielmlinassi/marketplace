import React from "react";
import Button from "@components/ui/Button";

type Props = {
  icon: React.ReactNode;
} & Omit<React.ComponentProps<typeof Button>, "children" | "as" | "href">;

const Sizes = {
  xs: "40px",
  sm: "40px",
  md: "40px",
  lg: "55px",
};

const IconButton = React.forwardRef<any, Props>(
  ({ icon, style, size = "sm", ...props }, ref) => {
    return (
      <Button
        as="button"
        ref={ref}
        size={size}
        {...props}
        style={{
          borderRadius: "100%",
          width: Sizes[size],
          height: Sizes[size],
          padding: 0,
          ...style,
        }}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";
export default IconButton;
