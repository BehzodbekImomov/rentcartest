"use client";
import { Button, CircularProgress } from "@mui/material";

import React, { Fragment, useContext, useEffect, useState } from "react";
import "./S.scss";
import CustomizedRating from "../Rating";
import CustomSwiper from "../Sliders/CustomSwiper";
import Link from "next/link";
import { carContext } from "@/context/CarContext";
import { request } from "@/request";
import Loading from "@/app/(public)/loading";
import { REST } from "@/constants/enpoint";
import { toast } from "react-toastify";

export default function Scar() {

  const { dispatch } = useContext(carContext);
  const [popular, setPopular] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await request.get(`${REST.CARS}cars/5`);
        setPopular(res?.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  
  }, []); // Boş bağımlılık listesi, useEffect'in yalnızca ilk renderda çalışmasını sağlar
  

  const handlePage = async () => {
    setPage(1);
    setIsLoading(true);
    try {
      const res = await request.get(`${REST.CARS}cars/5?page=${page + 1}`);
      setPopular(res?.data);
      setPage(prevPage => prevPage + 1);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card_cars">
      <ul className="popular_car">
        {isLoading ? (
          <Loading />
        ) : (
          popular.map((e) => (
            <li
              key={e.id}
              style={{
                backgroundImage: `url(https://rent-${e?.image[0]?.body.replace(
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
                      loading={isLoading}
                      loadingIndicator={
                        <CircularProgress color="secondary" size={20} />
                      }
                      loadingPosition="end"
                    onClick={() =>
                      dispatch({
                        type: "add-to-cart",
                        payload: e?.id,
                        products: popular,
                        // navigate:navigate
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
          ))
        )}
      </ul>
      <CustomSwiper popular={popular} loading={isLoading}/>

      <Button
          loading={isLoading}
          loadingIndicator={
            <CircularProgress color="secondary" size={20} />
          }
          loadingPosition="end"
        type="submit"
        className="btn"
        variant="text"
        onClick={handlePage}
        style={{ backgroundColor: "var(--white)", color: "" }}
      >
        Show more
      </Button>
    </div>
  );
}
