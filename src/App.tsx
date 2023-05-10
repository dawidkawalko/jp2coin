import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const LandingPage = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to bottom, #355C7D, #6C5B7B, #C06C84)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <Typography variant="h3" component="h1" color="white" gutterBottom>
              JP2 Coin
            </Typography>
            <Typography variant="subtitle1" color="white" gutterBottom>
              The Future of Digital Currency
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  What is JP2 Coin?
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  sx={{ lineHeight: 1.6 }}
                >
                  JP2 Coin is a revolutionary cryptocurrency designed for fast
                  and secure transactions. Built on the latest blockchain
                  technology, it offers a decentralized and transparent way to
                  transfer value globally.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Why Choose JP2 Coin?
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  sx={{ lineHeight: 1.6 }}
                >
                  - Lightning-fast transactions
                  <br />
                  - Enhanced security and privacy
                  <br />
                  - Global accessibility
                  <br />- Low transaction fees
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
