import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import cn from "classnames";
import * as Tabs from "@radix-ui/react-tabs";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

import s from "styles/collection/nft.module.scss";
import Certificates, { CertificateItem } from "data/certificates";
import { useBreakpoints } from "hooks";

import Certificate from "@components/common/Certificate";
import IconButton from "@components/ui/IconButton";
import {
  ArrowRightIcon,
  BadgeIcon,
  CheckedBadgeIcon,
  CheckIcon,
  FireIcon,
  GymIcon,
  HeartIcon,
  ShareIcon,
} from "@components/icons";
import Button from "@components/ui/Button";
import Carousel from "@components/common/Carousel";
import Banner from "@components/common/Banner";

const getNft = (serial: string): CertificateItem | undefined => {
  return Certificates.find((cert) => cert.serial === serial);
};

const getAllNftSlugs = (): string[] => {
  return Certificates.map((cert) => cert.serial);
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  nft: NonNullable<ReturnType<typeof getNft>>;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getAllNftSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  const nft = getNft(String(params?.slug));
  return nft ? { props: { nft } } : { notFound: true };
};

const NFT: NextPage<Props> = ({ nft }) => {
  const { isXs, isSm } = useBreakpoints();
  return (
    <div>
      <div className={s.product}>
        <div className={s.certificate}>
          <AspectRatio.Root ratio={11 / 17}>
            <Image src={nft.src} layout="fill" alt="" objectFit="cover" />
          </AspectRatio.Root>
        </div>
        <div className={s.details}>
          <div>
            <span className={cn(s.badge, s.purple)}>Legendary</span>
            <span className={cn(s.badge, s.green)}>#55</span>
          </div>
          <div className={s.title}>
            <div>
              <h1>Rigel</h1>
            </div>
            <div>
              <div className={s.value}>0.08 ETH</div>
              <div className={s.alternateValue}>$2,500.00</div>
            </div>
          </div>
          <div className={s.actions}>
            <Button variant="filled" color="primary" size="md">
              Buy now
            </Button>
            <IconButton icon={<ShareIcon />} size="lg" />
          </div>
          <Tabs.Root className={s.tabs} defaultValue="description">
            <Tabs.List className={s.tabsList}>
              <Tabs.Trigger value="description" className={s.tabsTrigger}>
                Description
              </Tabs.Trigger>
              <Tabs.Trigger value="details" className={s.tabsTrigger}>
                Details
              </Tabs.Trigger>
              <Tabs.Trigger value="history" className={s.tabsTrigger}>
                History
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              value="description"
              className={cn(s.tabsContent, s.tabsContentDescription)}
            >
              <div>
                <p>
                  Eius eum sunt in nulla autem voluptas facilis et magnam.
                  Provident accusamus omnis quos sunt. Illo enim consequuntur
                  ratione aperiam eum rerum. Incidunt rerum maxime voluptas ad
                  pariatur. Consequatur mollitia illum quia aut.
                </p>
                <div>
                  <div className={s.tabsContentListItem}>
                    <CheckIcon />
                    <p>Et perspiciatis fugit ratione.</p>
                  </div>
                  <div className={s.tabsContentListItem}>
                    <CheckIcon />
                    <p>Iste animi consectetur dicta dolorem delectus.</p>
                  </div>
                  <div className={s.tabsContentListItem}>
                    <CheckIcon />
                    <p>Et perspiciatis fugit ratione.</p>
                  </div>
                  <div className={s.tabsContentListItem}>
                    <CheckIcon />
                    <p>Dolores nesciunt non omnis nisi consequuntu</p>
                  </div>
                  <div className={s.tabsContentListItem}>
                    <CheckIcon />
                    <p>Et perspiciatis fugit ratione.</p>
                  </div>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content
              value="details"
              className={cn(s.tabsContent, s.tabsContentDetails)}
            >
              <div className={s.detail}>
                <div>Created by</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: ".5rem" }}>StarLedger, LLC</span>{" "}
                  <CheckedBadgeIcon />
                </div>
              </div>
              <div className={s.detail}>
                <div>Art Dimensions</div>
                <div>3,000x4,500JPG</div>
              </div>
              <div className={s.detail}>
                <div>Contact address</div>
                <div>0x495f...7b5e</div>
              </div>
              <div className={s.detail}>
                <div>Token ID</div>
                <div>3798008376110526...</div>
              </div>
              <div className={s.detail}>
                <div>Token standard</div>
                <div>ERC-1155</div>
              </div>
            </Tabs.Content>
            <Tabs.Content value="history" className={s.tabsContent}>
              <div>history</div>
            </Tabs.Content>
          </Tabs.Root>
          {/*  */}
          <div className={s.extra}>
            <div>
              <div className={s.extraHeading}>Location</div>
              <div className={s.extraIconWrap}>
                <div className={s.extraIcon}>
                  <Image
                    src="/star-location-placeholder.png"
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <div className={s.extraTitle}>Orion</div>
                  <div className={s.extraSubTitle}>Constellation</div>
                </div>
              </div>
            </div>
            <div>
              <div className={s.extraHeading}>Created by</div>
              <div className={s.extraIconWrap}>
                <div className={cn(s.extraIcon, s.extraIconBgBlue)}>
                  <Image
                    src="/star-createdby-placeholder.png"
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <div className={s.extraTitle}>StarLedger</div>
                  <div className={s.extraSubTitle}>
                    06688efdb18c...51efb8180094
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className={s.stats}>
            <div>
              <div className={s.statsHeading}>
                <div className={s.statsInnerWrap}>
                  <div className={cn(s.statsIcon, s.statsIconGreenBg)}>
                    <BadgeIcon />
                  </div>
                  <div>
                    <div className={s.statsTitle}>Ranking</div>
                    <div className={s.statsSubTitle}>#10</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={s.statsHeading}>
                <div className={s.statsInnerWrap}>
                  <div className={cn(s.statsIcon, s.statsIconRedBg)}>
                    <HeartIcon />
                  </div>
                  <div>
                    <div className={s.statsTitle}>BV</div>
                    <div className={s.statsSubTitle}>-0.03</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={s.statsHeading}>
                <div className={s.statsInnerWrap}>
                  <div className={cn(s.statsIcon, s.statsIconPurpleBg)}>
                    <GymIcon />
                  </div>
                  <div>
                    <div className={s.statsTitle}>HIP</div>
                    <div className={s.statsSubTitle}>24436</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={s.statsHeading}>
                <div className={s.statsInnerWrap}>
                  <div className={cn(s.statsIcon, s.statsIconPurpleBg)}>
                    <GymIcon />
                  </div>
                  <div>
                    <div className={s.statsTitle}>MAG</div>
                    <div className={s.statsSubTitle}>-6.93</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={s.statsHeading}>
                <div className={s.statsInnerWrap}>
                  <div className={cn(s.statsIcon, s.statsIconBlueBg)}>
                    <HeartIcon />
                  </div>
                  <div>
                    <div className={s.statsTitle}>Color</div>
                    <div className={s.statsSubTitle}>Blue (33.5%)</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={s.statsHeading}>
                <div className={s.statsInnerWrap}>
                  <div className={cn(s.statsIcon, s.statsIconRedBg)}>
                    <FireIcon />
                  </div>
                  <div>
                    <div className={s.statsTitle}>Magnitude</div>
                    <div className={s.statsSubTitle}>8 (30.1%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.nftsSection}>
        <div className={s.nftHeading}>
          <h2>You may also like</h2>
          <Button
            size={isXs || isSm ? "sm" : "md"}
            endIcon={<ArrowRightIcon />}
          >
            View All
          </Button>
        </div>
        <div className={s.nftProducts}>
          <Carousel
            slides={Certificates.map((cert) => (
              <Certificate
                key={cert.serial}
                certificate={cert}
                autosize
                compact
              />
            ))}
            slidesPerView={[1.1, 2, 4]}
          />
        </div>
      </div>

      <div className={s.bannerSection}>
        <Banner />
      </div>
    </div>
  );
};

export default NFT;
