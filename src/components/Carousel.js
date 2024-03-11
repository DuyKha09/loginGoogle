import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, CardContent, Grid, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BootstrapButton } from "./CustomButton";

const items = [
  {
    id: 1,
    title: "Watch Movies for Free",
    image:
      "https://deadline.com/wp-content/uploads/2017/12/blade-runner-36.jpg",
  },
  {
    id: 2,
    title: "Explore the World of Film",
    image:
      "https://www.usatoday.com/gcdn/-mm-/9442ebff27aa307914bc3eee8e6714ec80d9b732/c=0-188-3600-2213/local/-/media/2016/01/23/USATODAY/usatsports/xxx_interstellar-mov-jy-3197-_67833292.jpg?width=3200&height=1800&fit=crop&format=pjpg&auto=webp",
  },
  {
    id: 3,
    title: "Enjoy Thousands of Films",
    image:
      "https://cdn.theatlantic.com/thumbor/kRN8s-ef3HXwmhFLBOX9xNwbUbw=/201x0:1401x900/1200x900/media/img/mt/2018/07/TDK/original.jpg",
  },
];

function FilmCarousel() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
    >
      {items.map((item) => (
        <Paper key={item.id}>
          <Grid container direction="row" justifyContent="center">
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                p: 3,
                backgroundColor: "#3db0f5",
                color: "#fff",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h4"
                  align="left"
                  sx={{ textTransform: "capitalize", mb: 2 }}
                >
                  {item.title}
                </Typography>

                <BootstrapButton
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                >
                  Watch Now
                </BootstrapButton>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={10}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Carousel>
  );
}

export default FilmCarousel;
