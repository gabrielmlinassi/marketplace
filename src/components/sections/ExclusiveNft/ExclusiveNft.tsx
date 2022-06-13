import s from "./ExclusiveNft.module.scss";
import Certificates from "data/exclusive-certificates";
import { useBreakpoints } from "hooks";

import Categories from "./Categories";
import SearchBar from "@components/ui/SearchBar";
import Certificate from "@components/common/Certificate";
import Menu from "@components/ui/Menu";
import Carousel from "@components/common/Carousel";

const ExclusiveNft = () => {
  return (
    <>
      <div className={s.filters}>
        <Categories />
        <Menu>
          <Menu.Trigger fullWidth size="md" className="mobile-only">
            Recently added
          </Menu.Trigger>
          <Menu.Items>
            <Menu.Item>
              <a>item 1</a>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <div className={s.searchbar}>
          <SearchBar />
        </div>
      </div>
      <div className={s.illustrations}>
        <div>
          <Carousel
            slides={Certificates.map((certificate) => (
              <Certificate
                key={certificate.serial}
                certificate={certificate}
                autosize
              />
            ))}
            slidesPerViewDesktop={3}
          />
        </div>
      </div>
    </>
  );
};

export default ExclusiveNft;
