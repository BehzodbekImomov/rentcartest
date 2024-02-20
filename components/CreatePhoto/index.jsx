"use client";
import React, { useContext, useState } from "react";
import { request } from "@/request";
// import { idContext } from "../context/IdContext";
import { idContext } from "@/context/IdContext";
import { REST } from "@/constants/enpoint";

import "./CreatePhoto.scss";

export default function CreatePhoto() {
  const { idProducts } = useContext(idContext);

  const [formSubmit, setFormSubmit] = useState({
    photo1: null,
    photo2: null,
    photo3: null,
    photo4: null,
  });

  const handleChange = (e) => {
    setFormSubmit({ ...formSubmit, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.values(formSubmit).forEach((file) => {
      if (file) {
        formData.append("photos", file);
      }
    });
    formData.id = Number(idProducts);
    try {
      await request.post("/image", formData); // Updated endpoint
      setFormSubmit({
        photo1: [],
        photo2: [],
        photo3: [],
        photo4: [],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form_content">
      <div className="form_control">
        <form onSubmit={handleSubmit}>
          <input
            required
            name="photo1"
            onChange={handleChange}
            placeholder="Baggage"
            type="file"
          />

          <input
            required
            name="photo2"
            onChange={handleChange}
            placeholder="Brand"
            type="file"
          />

          <input
            required
            name="photo3"
            onChange={handleChange}
            placeholder="Description"
            type="file"
          />

          <input
            required
            name="photo4"
            onChange={handleChange}
            placeholder="Doors"
            type="file"
          />

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
