"use client";
import React, { useContext, useEffect, useState } from "react";
import { carContext } from "@/context/CarContext";
import CarCarousel from "../Sliders/Car_carusel";
import Image from "next/image";

import { request } from "@/request";
import { REST } from "@/constants/enpoint";
import { Button, CircularProgress } from "@mui/material";

import "./Card.scss";

export default function Card_Custom({ id }) {
  // const { carProducts } = useContext(carContext);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [booking, setBooking] = useState({
    customer_name: "",
    contact_number: "",
    email: "",
    from_destination: "",
  });
  useEffect(() => {
    getDataId();
  }, []);

  const submit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    try {
      setIsLoading(true);

      booking.car_id = Number(id);
      console.log(booking);
      await request.post(`${REST.ORDERS}`, booking);
      setBooking({
        customer_name: "",
        contact_number: "",
        email: "",
        from_destination: "",
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  async function getDataId() {
    try {
      setIsLoading(true);
      const res = await request.get(`${REST.CARS}car/${id}`);
      setPopular(res?.data);
      // console.log(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  console.log(popular);
  return (
    <div className="order">
      <div className="container_custom">
        <div className="car_content">
          <div className="car_img">
            <CarCarousel data={popular.image} loading={isLoading} />
          </div>
          <div className="car_title">
            <span>{popular?.brand}</span>
            <h3>{popular?.model}</h3>
            <p>{popular?.price_arab} AED/day</p>
            <ul>
              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/svg/car-door.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Doors:</p> <span>{popular?.doors}</span>
              </li>
              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/svg/transmission.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Transmission:</p>{" "}
                <span>
                  {popular.gear &&
                    popular.gear.replace("matic transmission", "")}
                </span>
              </li>
              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/svg/trunk.svg"
                    width={45}
                    height={45}
                    alt=""
                  />
                </div>
                <p>Baggage:</p> <span>{popular?.baggage}</span>
              </li>

              <li>
                <div className="box">
                  <Image
                    style={{ borderRadius: "100%" }}
                    src="/svg/fuel.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                </div>
                <p>Fuel:</p> <span>{popular?.fuel}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="car_desc">
          <p>{popular?.description}</p>
        </div>
        <div className="booking">
          <h3>Booking</h3>
          <h4>Please fill in the details</h4>
          <form onSubmit={submit}>
            <div className="inputs">
              <input
                onChange={handleChange}
                name="customer_name"
                value={booking.customer_name}
                type="text"
                placeholder="Your name "
              />
              <input
                onChange={handleChange}
                name="email"
                value={booking.email}
                type="email"
                placeholder="Your E-mail "
              />
              <input
                onChange={handleChange}
                name="contact_number"
                value={booking.contact_number}
                type="tel"
                placeholder="Your Phone "
              />
              <input
                onChange={handleChange}
                name="from_destination"
                value={booking.from_destination}
                type="text"
                placeholder="Your City "
              />
            </div>
            <Button
              variant="contained"
              loading={isLoading}
              loadingIndicator={
                <CircularProgress color="secondary" size={20} />
              }
              loadingPosition="end"
              onClick={handleClick}
              type="submit"
            >
              order
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
