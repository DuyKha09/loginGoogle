import { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Box,
  Card,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFavoriteGenreChange = (event) => {
    setFavoriteGenre(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <Container>
      <div ref={ref} className={`flim ${inView ? "visible" : ""}`}>
        <Card variant="elevation" sx={{ p: 3 }}>
          <h3>Contact us</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              fullWidth
              margin="normal"
            />

            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              value={phone}
              onChange={handlePhoneChange}
              fullWidth
              margin="normal"
            />

            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              margin="normal"
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="favorite-genre-label">
                Favorite film genre:
              </InputLabel>
              <Select
                labelId="favorite-genre-label"
                id="favorite-genre"
                value={favoriteGenre}
                onChange={handleFavoriteGenreChange}
                label="Favorite film genre"
              >
                <MenuItem value="">--Please choose an option--</MenuItem>
                <MenuItem value="action">Action</MenuItem>
                <MenuItem value="comedy">Comedy</MenuItem>
                <MenuItem value="drama">Drama</MenuItem>
                <MenuItem value="horror">Horror</MenuItem>
              </Select>
            </FormControl>

            <div className="contact-form--textarea">
              <label htmlFor="message">Message:</label>
              <TextareaAutosize
                id="message"
                value={message}
                onChange={handleMessageChange}
                rowsMin={3}
                placeholder="Write your message here..."
                style={{ width: "100%", padding: "10px" }}
              />
            </div>

            <Typography align="right">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ my: 2 }}
              >
                Submit
              </Button>
            </Typography>
          </form>
        </Card>
      </div>
    </Container>
  );
}

export default Contact;
