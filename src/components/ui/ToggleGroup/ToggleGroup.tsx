import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import cn from "classnames";

import s from "./ToggleGroup.module.scss";

type Props = {
  defaultValue: string;
  items: { label: string; value: string }[];
  className?: string;
};

const ToggleGroup = ({ items, defaultValue, className }: Props) => {
  return (
    <ToggleGroupPrimitive.Root
      type="single"
      defaultValue={defaultValue}
      className={cn(s.root, className)}
    >
      {items.map(({ label, value }) => (
        <ToggleGroupPrimitive.Item key={value} value={value} className={s.item}>
          {label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
};

export default ToggleGroup;
