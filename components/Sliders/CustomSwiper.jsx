import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import CustomizedRating from "../Rating";
import { Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { carContext } from "@/context/CarContext";
import Loading from "@/app/(public)/loading";

import "./styles.scss";
// import { REST } from "@/constants/enpoint";



export default function CustomSwiper({ popular, loading }) {
  const { dispatch } = useContext(carContext);
 
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={true}

          modules={[EffectCoverflow]}
          className="mySwiper"
          // onLoad={true}
        >
          {popular.map((e) => (
            <SwiperSlide key={e.id}>
              <li
                style={{
                  backgroundImage: `url(https://${e?.image[0]?.body.replace(
                    "/home/portofin/",
                    ""
                  )})`,
                }}
              >
                <div className="head_card">
                  <p>{e?.brand}</p>
                
                  <CustomizedRating />
                </div>
                <div className="food_card">
                  <p>
                    AED{e?.price_arab}/ <span>day</span>
                  </p>
                  <Link href={`order/${e?.id}`}>
                    {" "}
                    <Button
                        loading={loading}
                        loadingIndicator={
                          <CircularProgress  color="secondary" size={20} />
                        }
                        // loadingPosition="end"
                      onClick={() =>
                        dispatch({
                          type: "add-to-cart",
                          payload: e?.id,
                          products: popular,
                        })
                      }
                      type="submit"
                      variant="contained"
                      style={{ background: "#FEC31D" }}
                    >
                      Rent Now
                    </Button>
                  </Link>
                </div>
              </li>
            </SwiperSlide>
          ))}

         
        </Swiper>
      )}
    </>
  );
}
