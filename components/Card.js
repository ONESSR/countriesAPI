import { Paper, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export const Card = ({
  country: {
    flags: { svg },
    name: { common },
    population,
    region,
    capital
  }
}) => {
  return (
    <>
      <Paper>
        <Box
          sx={{
            position: "relative",
            height: "200px",
            "& > img": {
              display: "block",
              width: "100%",
              height: "100%"
            }
          }}
        >
          <img src={svg} alt="flag" />
        </Box>
        <Box>
          <Typography>{common}</Typography>
          <Typography>Population: {population}</Typography>
          <Typography>Region: {region}</Typography>
          <Typography>Capital: {capital}</Typography>
        </Box>
      </Paper>
    </>
  );
};
