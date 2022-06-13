import Image from "next/image";
import type { NextPage } from "next";
import cn from "classnames";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

import s from "styles/Home.module.scss";
import Products, { type ProductItem } from "data/services";

import { ArrowRightIcon } from "@components/icons";
import Button from "@components/ui/Button";
import Heading from "@components/ui/Heading";
import Certificate from "@components/common/Certificate";
import Discover from "@components/sections/Discover";
import ExclusiveNft from "@components/sections/ExclusiveNft";
import Banner from "@components/common/Banner";
import Section from "@components/ui/Section";

const Home: NextPage = () => {
  return (
    <>
      <section className={s.hero}>
        <div className={s.content}>
          <Heading variant="h1">
            Discover, find, and sell extraordinary NFTs
          </Heading>
          <Heading variant="p">
            The world&apos;s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs).
          </Heading>
          <Button
            as="link"
            href="/test"
            size="lg"
            variant="filled"
            color="primary"
          >
            Mint Star <ArrowRightIcon className="ml-4" />
          </Button>
        </div>
        <div className={s.certificate}>
          <Certificate
            certificate={{
              src: "/placeholder.png",
              currentValue: "0.08 ETH",
              alternateValue: "$2,500.00",
              serial: "07892",
              name: "Regulus",
            }}
          />
        </div>
      </section>
      <section className={s.statistics}>
        <div className={s.item}>
          <div className={cn(s.circle, s.green)} />
          <div>
            <div className={s.label}>Total sales</div>
            <div className={s.value}>{"16,789"}</div>
          </div>
        </div>
        <div className={s.item}>
          <div className={cn(s.circle, s.purple)} />
          <div>
            <div className={s.label}>Total volumes</div>
            <div className={s.valuesWrap}>
              <span className={s.value}>{"300.89"}</span>
              <span className={s.alternateValue}>${"833,722"}</span>
            </div>
          </div>
        </div>
        <div className={s.item}>
          <div className={cn(s.circle, s.yellow)} />
          <div>
            <div className={s.label}>Character sold</div>
            <div className={s.value}>{"8,321"}</div>
          </div>
        </div>
      </section>
      <Section className={s.productsSection}>
        <Section.Title>Stellar Star Products</Section.Title>
        <Section.SubTitle>
          We want to build a 1:1 digital representation of our galaxy as
          accurately as possible, and discover new ways to experience space in
          an immersive 3D metaverse.
        </Section.SubTitle>
        <div className={s.productsContainer}>
          {Products.map((product, k) => (
            <Product key={k} product={product} />
          ))}
        </div>
      </Section>
      <section className={s.discoverSection}>
        <Heading variant="h3">Discover</Heading>
        <Discover />
      </section>
      <Section className={s.exclusiveNftSection}>
        <Section.Title>Exclusive NFTs</Section.Title>
        <Section.SubTitle>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Section.SubTitle>
        <ExclusiveNft />
      </Section>
      <div className={s.banner}>
        <Banner />
      </div>
    </>
  );
};

const Product = ({ product }: { product: ProductItem }) => {
  return (
    <div className={s.product}>
      <div className={s.productImg}>
        <AspectRatio.Root ratio={6 / 7}>
          <Image
            src={product.image.src}
            layout="fill"
            objectFit="cover"
            alt={product.image.alt}
          />
        </AspectRatio.Root>
      </div>
      <div className={s.productFooter}>
        <div className={s.footerHeading}>{product.heading}</div>
        <div className={s.footerDescription}>{product.description}</div>
      </div>
    </div>
  );
};

export default Home;
