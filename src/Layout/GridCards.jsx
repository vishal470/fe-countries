import React, { useContext } from "react";
import { Box } from "@mui/material";
import CardCountry from "./CardCountry";
import { countriesContext } from "../store/CountriesContext";

const GridCards = () => {
  const [countries] = useContext(countriesContext);

  return (
    <Box
      component="section"
      aria-label="Countries"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, minmax(0, 1fr))",
          sm: "repeat(3, minmax(0, 1fr))",
          md: "repeat(4, minmax(0, 1fr))",
          lg: "repeat(7, minmax(0, 1fr))",
        },
        gap: 2,
        pb: 4,
      }}
    >
      {countries.map((country, index) => (
        <CardCountry
          key={`${country.abbr}-${index}`}
          id={index}
          name={country.name}
          flag={country.flag}
        />
      ))}
    </Box>
  );
};

export default GridCards;
