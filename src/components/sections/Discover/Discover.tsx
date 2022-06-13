import { useState } from "react";

import s from "./Discover.module.scss";
import Certificates, { type CertificateItem } from "data/certificates";
import Filters from "./Filters";

import Button from "@components/ui/Button";
import Certificate from "@components/common/Certificate";

const getCertificates = (): CertificateItem[] => {
  return Certificates.filter((_, i) => i < 4);
};

const Discover = () => {
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    await setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={s.root}>
      <Filters />
      <div className={s.content}>
        <div className={s.slider}>
          {getCertificates().map((certificate) => (
            <div key={certificate.serial} className={s.sliderItem}>
              <Certificate certificate={certificate} compact autosize />
            </div>
          ))}
        </div>
        <div className={s.loadMore}>
          <Button onClick={loadMore} loading={loading}>
            Load more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
