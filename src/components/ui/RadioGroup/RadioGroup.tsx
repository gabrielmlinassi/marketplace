import React, { useState } from "react";
import cn from "classnames";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import s from "./RadioGroup.module.scss";

type RadioGroupProps = {
  items: { label: string; value: string }[];
  onChange?: (value: string) => void;
};

const RadioGroup = ({ items, onChange }: RadioGroupProps): JSX.Element => {
  const [selected, setSelected] = useState<string>();

  const onValueChange = (value: string) => {
    setSelected(value);
    onChange && onChange(value);
  };

  return (
    <RadioGroupPrimitive.Root
      className={s.root}
      onValueChange={onValueChange}
      value={selected}
    >
      {items.map(({ value, label }) => {
        return (
          <RadioGroupPrimitive.Item
            key={value}
            value={value}
            id={value}
            className={cn(s.item, selected === value && [s.active])}
          >
            <RadioGroupPrimitive.Indicator />
            <label htmlFor={value}>{label}</label>
          </RadioGroupPrimitive.Item>
        );
      })}
    </RadioGroupPrimitive.Root>
  );
};

export default RadioGroup;
