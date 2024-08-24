import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Divider,
  ListItemIcon,
  TextField,
} from "@mui/material";
import axios from "axios";

const Home = () => {
  const [dogImage, setDogImage] = useState("");

  const fetchDogImage = async (props) => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${props}/images/random`
      );
      setDogImage(response.data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  const listOfAllDogs = async () => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breeds/list/all`);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error fetching dog data:", error);
    }
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("Input Value:", inputValue);
  };

  const bufferHandler = () => {
    handleButtonClick();
    fetchDogImage(inputValue);
    listOfAllDogs();
  };

  React.useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Шабаки онлайн</h1>
      <TextField
        id="outlined-basic"
        label="сюда породу пиши лох"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
      />
      {dogImage ? (
        <div>
          <img
            src={dogImage}
            alt="Random Dog"
            style={{ height: "350px", borderRadius: "8px", padding: "20px 0" }}
          />
          <br />
        </div>
      ) : (
        <CircularProgress />
      )}
      <Button onClick={bufferHandler} variant="contained">
        Новая шабака
      </Button>
    </div>
  );
};

export default Home;
