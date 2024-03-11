import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { data2 } from "../shared/ListOfFilms";

const Root = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
}));

const Media = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: "56.25%",
}));
function News() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {data2.map((film) => (
          <Grid item xs={12} sm={6} md={4} key={film.id}>
            <Root>
              <CardHeader title={`${film.title} (${film.year})`} />
              <Media image={film.image} title={film.title} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {film.summary}
                </Typography>
              </CardContent>
            </Root>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default News;
