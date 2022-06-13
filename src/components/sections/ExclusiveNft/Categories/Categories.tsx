import * as ToggleGroup from "@radix-ui/react-toggle-group";
import cn from "classnames";
import { useState } from "react";

import s from "./Categories.module.scss";

const Categories = () => {
  const [active, setActive] = useState(0);

  return (
    <ToggleGroup.Root type="single" className={cn(s.root, "desktop-only")}>
      {demo.map(({ label, value }, i) => (
        <ToggleGroup.Item
          key={value}
          value={value}
          className={s.item}
          onClick={() => setActive(i + 1)}
        >
          {label}
        </ToggleGroup.Item>
      ))}
      <div className={s.bb} data-active={active} />
    </ToggleGroup.Root>
  );
};

const demo = [
  { label: "All Exclusives", value: "all_exclusives" },
  { label: "Style 1", value: "style1" },
  { label: "Style ", value: "style2" },
  { label: "Style 3", value: "style3" },
];

export default Categories;
