import { useState, useEffect } from "react";
import Flims from "./Flims";

function Main() {
  const [APIData, setAPIData] = useState([]);
  const baseURL = `https://6492b384428c3d2035d084cd.mockapi.io/flims`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        const data = await response.json();
        setAPIData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [baseURL]);

  return <Flims flims={APIData} />;
}

export default Main;
