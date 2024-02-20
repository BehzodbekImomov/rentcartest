import { Button } from "@nextui-org/react";
import { Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

import "./Hero.scss";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <section className="hero">
      <div className="bg_content">
        <div className="container_custom ">
          <div className="hero_title">
            <h2>{t("hero_title")}</h2>
            <p>{t("hero_desc")}</p>
          </div>
          <div className="hero_buttons">
            <Stack spacing={2} direction="row">
              <Link href="https://wa.me/971564755115">
                <Button className="button_yellow">{t("hero_button1")}</Button>
              </Link>
              <Link href="#brands">
                <Button className="button_text" variant="text">
                  {t("hero_button2")}
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
      </div>
      <div className="fadbeack">
        <Link href="https://wa.me/971564755115" target="_blank">
          <div className="box_fad">
            <WhatsAppIcon
              fontSize="30px"
              sx={{ width: "50px", height: "50px" }}
              color="info"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
