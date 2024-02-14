import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d47",
  },
  //   "& .MuiRating-iconHover": {
  //     color: "#ff3d47",
  //   },
});

export default function CustomizedRating() {
  const [rating, setRating] = React.useState(1);

  const handleRatingChange = (event, value) => {
    if (value === null) {
      setRating(1);
    } else {
      setRating(2);
    }
  };
  //console.log(rating);//
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <StyledRating
        onChange={handleRatingChange}
        sx={{ color: "#FEC31D" }}
        name="customized-color"
        defaultValue={0}
        precision={1}
        max={1}
        icon={<FavoriteIcon fontSize="22px"  />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
}
