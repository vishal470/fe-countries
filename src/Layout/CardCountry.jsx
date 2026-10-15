import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const CardCountry = ({ name, flag, id }) => {
  return (
    <Link
      to={`/country/${id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Card
        sx={{
          height: "100%",
          minHeight: 162,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          boxShadow: "none",
          "&:hover": {
            boxShadow: 3,
          },
        }}
      >
        <Box
          component="img"
          src={flag}
          alt={`${name} flag`}
          sx={{
            width: 86,
            height: 86,
            objectFit: "contain",
            mt: 1,
          }}
        />
        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            px: 1,
            py: 1,
            "&:last-child": {
              pb: 1,
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              color: "text.primary",
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              fontWeight: 700,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardCountry;
