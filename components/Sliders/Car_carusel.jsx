"use client";
import React, { useContext, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Car_carousel.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { carContext } from "@/context/CarContext";
import Loading from "@/app/(public)/loading";
import Image from "next/image";

export default function CarCarousel({ data, loading }) {
  // const { carProducts } = useContext(carContext);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (!data) {
    return <Loading />; // yoki kerakli UI-ni ko'rsatishingiz mumkin, masalan, yuklanmoqda bo'lgan spinner, xato xabari yoki boshqa maqbul UI.
  }
  console.log(data);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {loading ? (
          <Loading />
        ) : (
          data.map((e) => (
            <SwiperSlide key={e?.id}>
              <figure>
                <img
                  src={`https://${e?.body.replace("/home/portofin", "")}`}
                  alt="img"
                />
              </figure>
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1"
      >
        {loading ? (
          <Loading />
        ) : (
          data.map((e) => (
            <SwiperSlide key={e?.id}>
              <figure>
                <img
                  src={`https://${e?.body.replace("/home/portofin", "")}`}
                  alt="img"
                />
              </figure>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
}
