import Image from "next/image";
import { useTranslation } from "react-i18next";

import "./About_work.scss";

export default function About_work() {
  const { t } = useTranslation();
  return (
    <section className="about_work" id="rental">
      <div className="container_custom">
        <div className="work_content">
          <h3>{t("about_title")}</h3>
          <p className="paragraf">
            {t('about_desc')}
          </p>
        </div>

        <ul className="work_boxs">
          <li>
            <div className="box_img">
              <Image
                src="/svg/location.svg"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
            <h4>{t('about_loc')}</h4>
            <p>
              {t('about_loc_desc')}
            </p>
          </li>
          <li>
            <div className="box_img">
              <Image src="/images/data.png" alt="" width={45} height={45} />
            </div>

            <h4>{t('about_date')}</h4>
            <p>{t('about_date_desc')}</p>
          </li>
          <li>
            <div className="box_img">
              <Image
                style={{ color: "#FEC31D", opacity: "1" }}
                src="/images/car.png"
                alt=""
                width={45}
                height={45}
              />
            </div>
            <h4>{t('about_car')}</h4>
            <p>
              {t('about_car_desc')}
            </p>
          </li>
        </ul>

        <div className="vector1">
          <Image src="/svg/vector1.svg" width={460} height={83} alt="vector" />
        </div>
        <div className="vector2">
          <Image src="/svg/vector2.svg" width={460} height={83} alt="vector" />
        </div>
      </div>
    </section>
  );
}
