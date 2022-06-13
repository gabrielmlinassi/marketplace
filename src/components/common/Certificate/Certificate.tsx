import { useReducer } from "react";
import Image from "next/image";
import cn from "classnames";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

import s from "./Certificate.module.scss";
import Button from "@components/ui/Button";
import { CertificateItem } from "data/certificates";
import { useBreakpoints } from "hooks";
import { useRouter } from "next/router";

type CertificateProps = {
  autosize?: boolean;
  compact?: boolean;
  certificate: CertificateItem;
};

function Certificate({ autosize, compact, certificate }: CertificateProps) {
  const router = useRouter();
  const [hovering, toggle] = useReducer((s) => !s, false);
  const classes = cn(s.illustration, { [s.compact]: compact });
  const { isLg, isXs, isSm } = useBreakpoints();

  const handleClick = () => {
    if (isXs || isSm) {
      router.push(`/collection/nft/${certificate.serial}`);
    }
  };

  return (
    <div
      className={cn(s.root, { [s.autosize]: autosize })}
      onClick={handleClick}
    >
      <div className={classes} onMouseEnter={toggle} onMouseLeave={toggle}>
        <AspectRatio.Root ratio={compact ? 11 / 17 : 6 / 7}>
          {isLg && hovering && (
            <>
              <div className={s.content}>
                <Button
                  as="link"
                  href={`/collection/nft/${certificate.serial}`}
                  variant="filled"
                  color="primary"
                  size="md"
                  fullWidth
                >
                  Buy now
                </Button>
                <Button variant="outline" color="secondary" size="md" fullWidth>
                  View detail
                </Button>
              </div>
              <div className={s.overlay} />
            </>
          )}
          <Image
            src={certificate.src}
            layout="fill"
            alt=""
            quality={100}
            objectFit="cover"
          />
        </AspectRatio.Root>
      </div>
      <div className={s.details}>
        <div>
          <div className={s.series}>#{certificate.serial}</div>
          <div className={s.name}>{certificate.name}</div>
        </div>
        <div>
          <div className={s.priceValue}>{certificate.currentValue}</div>
          <div className={s.alternatePrice}>{certificate.alternateValue}</div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
