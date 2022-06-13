import React, { useEffect, useRef, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import s from "./Menu.module.scss";
import Button, { ButtonProps } from "@components/ui/Button";
import { ArrowDownIcon } from "@components/icons";

type ContextProps = {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
};

const Context = React.createContext<ContextProps>({
  width: 0,
  setWidth: () => {},
});

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const MenuButton = ({ children, ...rest }: ButtonProps) => {
  const { setWidth } = React.useContext(Context);
  const ref = useRef<HTMLButtonElement>();

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.clientWidth);
    }
  }, [setWidth]);

  return (
    <DropdownMenu.Trigger asChild className={s.trigger}>
      <Button ref={ref} endIcon={<ArrowDownIcon />} {...rest}>
        {children}
      </Button>
    </DropdownMenu.Trigger>
  );
};

const MenuItems = ({ children }: Props) => {
  const { width } = React.useContext(Context);
  return (
    <DropdownMenu.Content
      align="start"
      style={{ minWidth: width }}
      sideOffset={6}
      className={s.content}
    >
      {children}
    </DropdownMenu.Content>
  );
};

const MenuItem = ({ children }: Props) => {
  return <DropdownMenu.Item className={s.item}>{children}</DropdownMenu.Item>;
};

const Menu = ({ children }: Pick<Props, "children">) => {
  const [width, setWidth] = useState(0);
  return (
    <Context.Provider value={{ width, setWidth }}>
      <DropdownMenu.Root>{children}</DropdownMenu.Root>
    </Context.Provider>
  );
};

Menu.Trigger = MenuButton;
Menu.Items = MenuItems;
Menu.Item = MenuItem;

export default Menu;
