import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import cn from "classnames";

import s from "./Sheet.module.scss";

import { CrossIcon } from "@components/icons";
import Button from "components/ui/Button";
import IconButton from "components/ui/IconButton";

const Sheet = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Filters</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          <Dialog.Title>Filter Menu</Dialog.Title>
          <div className={s.filter}>
            <div className={s.fitlerHeading}>Sort by</div>
            <div className={s.filterBoxes}>
              <RadioGroup.Root>
                <RadioGroup.Item value="tag1" asChild>
                  <span className={s.filterBox}>Recently added</span>
                </RadioGroup.Item>
                <RadioGroup.Item value="tag2" asChild>
                  <span className={s.filterBox}>tag2</span>
                </RadioGroup.Item>
                <RadioGroup.Item value="tag3" asChild>
                  <span className={s.filterBox}>tag3</span>
                </RadioGroup.Item>
              </RadioGroup.Root>
              {/*  */}
            </div>
          </div>
          <Dialog.Close asChild>
            <IconButton
              variant="subtle"
              icon={<CrossIcon />}
              className={s.closeBtn}
            />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Sheet;
