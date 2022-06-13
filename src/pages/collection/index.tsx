import { CheckedBadgeIcon, CopyIcon } from "@components/icons";
import { NextPage } from "next";
import Image from "next/image";
import cn from "classnames";

import s from "styles/collection/Collection.module.scss";
import { useBreakpoints } from "hooks";
import Certificates from "data/certificates";

import Button from "@components/ui/Button";
import Heading from "@components/ui/Heading";
import Menu from "@components/ui/Menu";
import ToggleGroup from "@components/ui/ToggleGroup";
import PriceRange from "@components/ui/PriceRange";
import Certificate from "@components/common/Certificate";
import Banner from "@components/common/Banner";

const getCertificates = () => {
  return Certificates.filter((_, i) => i < 6);
};

const Collection: NextPage = () => {
  const { isXs, isSm } = useBreakpoints();
  return (
    <div className={s.root}>
      <div className={s.coverImg}>
        <Image
          src="/collection-placeholder.jpg"
          layout="fill"
          alt=""
          quality={100}
          priority
          objectFit="cover"
        />
      </div>
      <div className={s.profile}>
        <div className={s.logoWrap}>
          <div className={s.logoImg}>
            <div className={s.logoImgWrap}>
              <Image
                src="/collection-logo-placeholder.png"
                layout="fill"
                priority
                alt=""
              />
            </div>
          </div>
          <div className={s.info}>
            <div className={s.infoName}>
              <h1>StarLedger</h1> <CheckedBadgeIcon width={40} />
            </div>
            <div className={s.infoStatusWrap}>
              <div className={cn(s.infoStatus, s.infoStatusActive)}></div>
              <div className={s.infoNum}>
                <span>hk980io77498864...73bz88066367856</span> <CopyIcon />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button>Share profile</Button>
        </div>
      </div>
      {/*  */}
      <div className={s.summary}>
        <div className={s.summaryItem}>
          <div>21</div>
          <div>items</div>
        </div>
        <div className={s.summaryItem}>
          <div>1</div>
          <div>owner</div>
        </div>
        <div className={s.summaryItem}>
          <div>13</div>
          <div>lending</div>
        </div>
        <div className={s.summaryItem}>
          <div>08</div>
          <div>renting</div>
        </div>
        <div className={s.summaryItem}>
          <div>$10.3K</div>
          <div>earned</div>
        </div>
        <div className={s.summaryItem}>
          <div>$48.5K</div>
          <div>collection value</div>
        </div>
      </div>
      {/*  */}
      <div className={s.discoverSection}>
        <Heading variant="h3">Discover</Heading>
        <div className={s.discoverContent}>
          <div className={s.discoverTopFilters}>
            <Menu>
              <Menu.Trigger>Recently added</Menu.Trigger>
              <Menu.Items>
                <Menu.Item>Item #1</Menu.Item>
                <Menu.Item>Item #2</Menu.Item>
                <Menu.Item>Item #3</Menu.Item>
              </Menu.Items>
            </Menu>
            {!isXs && !isSm && (
              <ToggleGroup
                items={[
                  { label: "All Stars", value: "all_stars" },
                  { label: "Polaris", value: "polaris" },
                  { label: "Sirius", value: "sirius" },
                  { label: "Betelgeuse", value: "betelgeuse" },
                  { label: "Rigel", value: "rigel" },
                  { label: "Vega", value: "vega" },
                ]}
                defaultValue="all_stars"
              />
            )}
          </div>
          {!isXs && !isSm && (
            <div>
              <div className={s.fieldset}>
                <label>Price range</label>
                <PriceRange />
              </div>
              <div className={s.fieldset}>
                <label>Likes</label>
                <Menu>
                  <Menu.Trigger fullWidth>Most liked</Menu.Trigger>
                  <Menu.Items>
                    <Menu.Item>Item #1</Menu.Item>
                    <Menu.Item>Item #2</Menu.Item>
                    <Menu.Item>Item #3</Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
              <div className={s.fieldset}>
                <label>Open</label>
                <Menu>
                  <Menu.Trigger fullWidth>Colors</Menu.Trigger>
                  <Menu.Items>
                    <Menu.Item>Item #1</Menu.Item>
                    <Menu.Item>Item #2</Menu.Item>
                    <Menu.Item>Item #3</Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          )}
          <div className={s.discoverResults}>
            {getCertificates().map((cert) => (
              <Certificate key={cert.serial} certificate={cert} compact />
            ))}
            <div className={s.discoverResultsLoadMore}>
              <Button loading={false}>Load more</Button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={s.bannerWrap}>
        <Banner />
      </div>
    </div>
  );
};

export default Collection;
