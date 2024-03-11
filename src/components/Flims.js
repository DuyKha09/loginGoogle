import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import FlimItem from "./FlimItem";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import FilmCarousel from "./Carousel";

function Flims({ flims }) {
  const ITEMS_PER_PAGE = 12;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(flims.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedFlims = flims.slice(startIndex, endIndex);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <FilmCarousel />
      <Container>
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: "600", color: "black" }}>
            Daily Flims
          </Typography>
          <Divider sx={{ bgcolor: "grey" }} />
        </Box>
        {isLoading ? (
          <Loading />
        ) : (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {displayedFlims &&
              displayedFlims.length > 0 &&
              displayedFlims.map((flim) => (
                <Grid item xs={12} sm={4} md={4}>
                  <FlimItem key={flim.id} flim={flim}></FlimItem>
                </Grid>
              ))}
          </Grid>
        )}

        <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
          <Button
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            endIcon={<KeyboardArrowLeftIcon />}
            className="previous-button border"
            color="primary"
            size="large"
          />

          <ButtonGroup>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`page-button ${
                    currentPage === page ? "active" : ""
                  }`}
                >
                  {page}
                </Button>
              )
            )}
          </ButtonGroup>
          <Button
            className="next-button border"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            startIcon={<KeyboardArrowRightIcon />}
            color="primary"
            size="large"
          />
        </Box>
      </Container>
    </>
  );
}

export default Flims;
