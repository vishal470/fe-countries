import React from "react";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Box, Container, Grid, Button, Typography } from "@mui/material";
import { countriesContext } from "../store/CountriesContext";
import { useParams, Link } from "react-router-dom";

const CountryPage = () => {
  const [, countries] = React.useContext(countriesContext);
  const { index } = useParams();
  const country = countries[Number(index)];

  return (
    <Container maxWidth={false} sx={{ py: 5 }}>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button
          variant="contained"
          startIcon={<KeyboardBackspaceRoundedIcon />}
          sx={{ mb: 5 }}
        >
          Back
        </Button>
      </Link>
      {country ? (
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={country.flag}
              alt={`${country.name} flag`}
              sx={{ display: "block", width: "100%", maxWidth: 500, mx: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h4" fontWeight={700}>
              {country.name}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Typography component="p">Country not found.</Typography>
      )}
    </Container>
  );
};

export default CountryPage;
