"use client";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiger.scss";


export default function CustomCarousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '"><div className="circle"></div></span>'
      );
    },
  };

  return (
    <Swiper
      pagination={pagination}
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        990: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper1"
    >
      <SwiperSlide
        className="swiper_slide"
        style={{ width: "400px", height: "230px" }}
      >
        <div className="carousel_box">
          <div className="card_carousel">
            <div className="card">
              <div className="box_circle"></div>
              <div className="box_title">
                <h4>Viezh Robert</h4>
                <span>Warsaw, Poland</span>
              </div>
            </div>
            <p>4.5</p>
          </div>
          <div className="desc_scrool">
            <p className="desc">
              Portofino is the best car rental company. I recommend everyone to
              choose this company
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="swiper_slide"
        style={{ width: "400px", height: "230px" }}
      >
        <div className="carousel_box">
          <div className="card_carousel">
            <div className="card">
              <div className="box_circle"></div>
              <div className="box_title">
                <h4>Viezh Robert</h4>
                <span>Warsaw, Poland</span>
              </div>
            </div>
            <p>4.5</p>
          </div>
          <div className="desc_scrool">
            <p className="desc">
              When I need a car I always turn to portofino. You won&apos;t find cars
              like this at these prices anywhere else.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="swiper_slide"
        style={{ width: "400px", height: "230px" }}
      >
        <div className="carousel_box">
          <div className="card_carousel">
            <div className="card">
              <div className="box_circle"></div>
              <div className="box_title">
                <h4>Viezh Robert</h4>
                <span>Warsaw, Poland</span>
              </div>
            </div>
            <p>4.5</p>
          </div>
          <div className="desc_scrool">
            <p className="desc">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="swiper_slide"
        style={{ width: "400px", height: "230px" }}
      >
        <div className="carousel_box">
          <div className="card_carousel">
            <div className="card">
              <div className="box_circle"></div>
              <div className="box_title">
                <h4>Viezh Robert</h4>
                <span>Warsaw, Poland</span>
              </div>
            </div>
            <p>4.5</p>
          </div>
          <div className="desc_scrool">
            <p className="desc">
              Luxury cars, reasonable prices and quality service - that&apos;s all
              about portofino
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="swiper_slide"
        style={{ width: "400px", height: "230px" }}
      >
        <div className="carousel_box">
          <div className="card_carousel">
            <div className="card">
              <div className="box_circle"></div>
              <div className="box_title">
                <h4>Viezh Robert</h4>
                <span>Warsaw, Poland</span>
              </div>
            </div>
            <p>4.5</p>
          </div>
          <div className="desc_scrool">
            <p className="desc">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="swiper_slide"
        style={{ width: "400px", height: "230px" }}
      >
        <div className="carousel_box">
          <div className="card_carousel">
            <div className="card">
              <div className="box_circle"></div>
              <div className="box_title">
                <h4>Viezh Robert</h4>
                <span>Warsaw, Poland</span>
              </div>
            </div>
            <p>4.5</p>
          </div>
          <div className="desc_scrool">
            <p className="desc">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
