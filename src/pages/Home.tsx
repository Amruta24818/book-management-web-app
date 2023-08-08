import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import hero_book_img from "../assets/search-books.jpeg";
import { Nav } from "../components/Nav";
import { font_primary } from "../default/theme";

export const Home = () => {
  return (
    <Box sx={{ overflow: "hidden", height: "100vh" }}>
      <Nav />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            height: "60%",
            margin: "auto",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
        >
          <Box sx={{ width: "40%", overflow: "hidden" }}>
            <img src={hero_book_img} alt="Hero_book_img" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "2%",
              textAlign: "center",
              marginTop: "-5%",
            }}
          >
            <Typography variant="h4" sx={{ maxWidth: "70%" }}>
              Find Your Next Favorite Book
            </Typography>

            <TextField
              size="small"
              placeholder="Search books..."
              sx={{
                padding: "6px",
                border: `1px solid ${font_primary}`,
                borderRadius: "4px",
                margin: "1%",
              }}
              variant="standard"
            />
            <Button variant="contained" sx={{ textDecorationStyle: "solid" }}>
              Search
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
