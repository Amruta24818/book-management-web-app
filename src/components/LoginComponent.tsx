import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  TextField,
} from "@mui/material";
import React from "react";
import Logo from "../assets/books.jpg";
import { background, background_2 } from "../default/theme";

export const LoginComponent = () => {
  return (
    <Container
      style={{
        paddingTop: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          padding: "2%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#38512f",
          border: `2px solid ${background_2}`,
          backgroundColor: background,
        }}
      >
        <Box sx={{ marginLeft: "10%", padding: "2%", minWidth: "300px" }}>
          <CardHeader title="Login" />
          <Box>
            <Box sx={{ margin: "3%" }}>
              <TextField
                size="small"
                placeholder="Email"
                component={"div"}
                fullWidth
              />
            </Box>
            <Box sx={{ margin: "3%" }}>
              <TextField
                size="small"
                placeholder="Password"
                component={"div"}
                fullWidth
              />
            </Box>
            <Box sx={{ margin: "2%" }} pt={1}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Box>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <CardMedia
          image={Logo}
          component={"img"}
          alt="Logo"
          sx={{ marginRight: "7%", width: "200px", objectFit: "scale-down" }}
        />
      </Card>
    </Container>
  );
};
