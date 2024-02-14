"use client";
import React, { useContext, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button } from "@mui/material";
import { idContext } from "@/context/IdContext";
import Image from "next/image";
import { REST } from "@/constants/enpoint";
import { request } from "@/request";

import "./CreatePhoto.scss";

const CreatePhoto = () => {
  const { idProducts } = useContext(idContext);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
  };

  const handleUpload = async () => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });

      formData.id = Number(idProducts);
      console.log(formData);
      try {
        // const res = await request.post(REST.IMAGES, formData);
      } catch (err) {}
    }
  };

  return (
    <div className="form_content">
      <div style={{ display: "flex", gap: "5px" }}>
        {selectedFiles.map((file, index) => (
          <Image
            style={{ borderRadius: "10px" }}
            key={index}
            src={URL.createObjectURL(file)}
            alt={`Preview ${index + 1}`}
            width={120}
            height={100}
          />
        ))}
      </div>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <input
          type="file"
          multiple
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
      </Button>

      <Button variant="contained" type="submit" onClick={handleUpload}>
        Create
      </Button>

      <div></div>
    </div>
  );
};

export default CreatePhoto;
