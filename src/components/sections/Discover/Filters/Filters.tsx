import cn from "classnames";

import s from "./Filters.module.scss";
import { useBreakpoints } from "hooks";
import Menu from "@components/ui/Menu";
import PriceRange from "@components/ui/PriceRange";
import ToggleGroup from "@components/ui/ToggleGroup";

const MobileFilter = () => {
  return (
    <div>
      <div className={s.filterBar}>
        <Menu>
          <Menu.Trigger>Recently added</Menu.Trigger>
          <Menu.Items>
            <Menu.Item>item #1</Menu.Item>
            <Menu.Item>item #2</Menu.Item>
            <Menu.Item>item #3</Menu.Item>
          </Menu.Items>
        </Menu>
        <Menu>
          <Menu.Trigger>All Stars</Menu.Trigger>
          <Menu.Items>
            <Menu.Item>item #1</Menu.Item>
            <Menu.Item>item #2</Menu.Item>
            <Menu.Item>item #3</Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

const DesktopFilter = () => {
  return (
    <div>
      <div className={s.filterBar}>
        <Menu>
          <Menu.Trigger>Recently added</Menu.Trigger>
          <Menu.Items>
            <Menu.Item>item #1</Menu.Item>
            <Menu.Item>item #2</Menu.Item>
            <Menu.Item>item #3</Menu.Item>
          </Menu.Items>
        </Menu>
        <ToggleGroup items={categories} defaultValue={categories[0].value} />
        <Menu>
          <Menu.Trigger className="mobile-only">All Stars</Menu.Trigger>
          <Menu.Items>
            <Menu.Item>item #1</Menu.Item>
            <Menu.Item>item #2</Menu.Item>
            <Menu.Item>item #3</Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      <hr className={s.separator} />
      <div className={cn(s.filterBar, s.barBottom)}>
        <div className={s.fieldset}>
          <label>Price</label>
          <Menu>
            <Menu.Trigger>Highest price</Menu.Trigger>
            <Menu.Items>
              <Menu.Item>item #1</Menu.Item>
              <Menu.Item>item #2</Menu.Item>
              <Menu.Item>item #3</Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className={s.fieldset}>
          <label>Price</label>
          <Menu>
            <Menu.Trigger>Most liked</Menu.Trigger>
            <Menu.Items>
              <Menu.Item>item #1</Menu.Item>
              <Menu.Item>item #2</Menu.Item>
              <Menu.Item>item #3</Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className={s.fieldset}>
          <label>Price</label>
          <Menu>
            <Menu.Trigger>Verified only</Menu.Trigger>
            <Menu.Items>
              <Menu.Item>item #1</Menu.Item>
              <Menu.Item>item #2</Menu.Item>
              <Menu.Item>item #3</Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className={s.fieldset}>
          <label className="mb-4">Price Range</label>
          <PriceRange />
        </div>
      </div>
    </div>
  );
};

const Filters = () => {
  const { isLg } = useBreakpoints();
  return isLg ? <DesktopFilter /> : <MobileFilter />;
};

const categories = [
  { label: "All Stars", value: "allStars" },
  { label: "Polaris", value: "polaris" },
  { label: "Sirius", value: "sirius" },
  { label: "Rigel", value: "rigel" },
  { label: "Vega", value: "vega" },
  { label: "Rigel", value: "rigel2" },
];

export default Filters;
