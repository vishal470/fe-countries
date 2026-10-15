import React from "react";
import { Container } from "@mui/material";
import GridCards from "../Layout/GridCards";
import { getCountries } from "../helpers/getData";

const MainPage = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ px: { xs: 2, sm: 4, lg: "6.1%" }, pt: 1 }}>
      <GridCards />
    </Container>
  );
};

export default MainPage;

export async function loader() {
  const countries = await getCountries();
  return { countries };
}
