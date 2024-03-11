import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Container } from "@mui/material";

function About() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems);
  }, []);

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <Container className="about" style={{ backgroundColor: "#0A1929" }}>
      <div
        ref={ref}
        className={`flim ${inView ? "visible" : ""}`}
        style={{ backgroundColor: "#0A1929" }}
      >
        <ul className="collapsible">
          <li>
            <div
              className="collapsible-header"
              style={{ backgroundColor: "#273444", color: "#FFFFFF" }}
            >
              <i className="material-icons">explore</i>About Our Site
            </div>
            <div
              className="collapsible-body"
              style={{ backgroundColor: "#1E2C3A", color: "#FFFFFF" }}
            >
              <span>
                At our site, we’re passionate about movies and providing the
                best possible experience for our users. Explore our site to
                discover a wide variety of movies in your favorite genres!
              </span>
            </div>
          </li>
          <li>
            <div
              className="collapsible-header"
              style={{ backgroundColor: "#273444", color: "#FFFFFF" }}
            >
              <i className="material-icons">movie</i>How to Watch a Movie
            </div>
            <div
              className="collapsible-body"
              style={{ backgroundColor: "#1E2C3A", color: "#FFFFFF" }}
            >
              <span>
                Watching a movie on our site is easy. Simply search for the
                movie you want to watch or browse through our extensive
                selection. Once you’ve found the perfect movie, choose whether
                to rent or buy it or subscribe to our premium service for
                unlimited access to all of our movies.
              </span>
            </div>
          </li>
          <li>
            <div
              className="collapsible-header"
              style={{ backgroundColor: "#273444", color: "#FFFFFF" }}
            >
              <i className="material-icons">contact_support</i>Getting Help
            </div>
            <div
              className="collapsible-body"
              style={{ backgroundColor: "#1E2C3A", color: "#FFFFFF" }}
            >
              <span>
                We’re here to help! If you have any questions or experience
                issues with our site, please don’t hesitate to contact our
                friendly customer support team. You can reach us by phone,
                email, or live chat at any time.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default About;
