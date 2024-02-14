import { Button } from "@nextui-org/react";
import { Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="bg_content">
        <div className="container_custom ">
          <div className="hero_title">
            <h2>Fast And Easy Way To Rent A Car</h2>
            <p>
            Our cars are not just a means of transportation, but for luxury
            </p>
          </div>
          <div className="hero_buttons">
            <Stack spacing={2} direction="row">
              <Link href="https://wa.me/971564755115">
              
              <Button className="button_yellow">Booking Now</Button>
              </Link>
              <Link href="#brands">
              <Button className="button_text" variant="text">
                See all cars
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
