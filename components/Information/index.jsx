"use client"
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import DiscountIcon from "@mui/icons-material/Discount";
import PlaceIcon from "@mui/icons-material/Place";
import "./Informations.scss";
import { useTranslation } from "react-i18next";

export default function Informations() {

  const {t}=useTranslation()

  return (
    <section className="informations" id="choose">
      <div className="container_custom info">
        <div className="info_title">
          <h3>{t('info_title')}</h3>
          <p>
           {t('info_desc')}
          </p>
        </div>
        <div className="info_content">
          <Image src="/images/info_box.png" width={566} height={528} alt="" />
          <ul>
            <li>
              <div className="info_box">
                <PhoneIcon sx={{ color: "var(--white)" }} />
              </div>
              <div className="info_desc">
                <h4>{t('info_desc1')}</h4>
                <p>{t('info_desc1_d')}</p>
              </div>
            </li>
            <li>
              <div className="info_box">
                <DiscountIcon sx={{ color: "var(--white)" }} />
              </div>
              <div className="info_desc">
                <h4>{t('info_desc2')}</h4>
                <p>
              {t('info_desc2_d')}
                </p>
              </div>
            </li>
            <li>
              <div className="info_box">
                <PlaceIcon sx={{ color: "var(--white)" }} />
              </div>

              <div className="info_desc">
                <h4>{t("info_desc3")}</h4>
                <p>{t('info_desc3_d')}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
