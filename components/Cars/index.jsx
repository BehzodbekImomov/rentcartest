"use client";
import { useEffect } from "react";
import Tab from "../Tabs";
import "./Cars.scss";
import { request } from "@/request";
import { useTranslation } from "react-i18next";

const Cars = () => {
 const{t}=useTranslation()

  return (
    <section className="cars" id="brands">
      <div className="container_custom">
        <div className="cars_content">
          <h3>{t('car_title')}</h3>
          <p>
       {t('car_desc')}
          </p>
        </div>

        <Tab />
      </div>
    </section>
  );
};

export default Cars;
