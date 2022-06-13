import Image from "next/image";

import s from "./Banner.module.scss";
import { ArrowRightIcon } from "@components/icons";
import Button from "@components/ui/Button";

const Banner = () => {
  return (
    <div className={s.banner}>
      <div className={s.content}>
        <h1>Join our community</h1>
        <h4>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </h4>
        <div className={s.button}>
          <Button
            variant="filled"
            color="primary"
            size="lg"
            endIcon={<ArrowRightIcon />}
          >
            Mint Star
          </Button>
        </div>
      </div>
      <div className={s.overlay} />
      <Image
        src="/footer-bg.png"
        alt=""
        layout="fill"
        quality={100}
        objectFit="cover"
      />
    </div>
  );
};

export default Banner;
