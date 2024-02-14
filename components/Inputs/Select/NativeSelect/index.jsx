"use client";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MenuItem, Select } from "@mui/material";
import "./NativeSelect.scss";
export default function NativeSelectGroup({ name }) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(age);
  return (
    <FormControl
      variant="standard"
      sx={{
        m: 1,
        minWidth: 130,
      }}
    >
      <InputLabel
        id="demo-simple-select-standard-label"
        sx={{
          fontSize: "13px",
          fontStyle: "normal",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        <span className="name"> {name}</span>
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={age}
        onChange={handleChange}
        label="Age"
        IconComponent={ExpandMoreIcon}
      >
        <MenuItem value="">{/* <em>None</em> */}</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
