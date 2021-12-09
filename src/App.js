import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from './constants';
import Title from "./Title";
import Section from "./Section";
import Footer from "./Footer";

function App() {
  const [apodData, setApodData] = useState({})

  useEffect(() => {
    const fetchData = () => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        const data = res.data
        setApodData(data)
      })
      .catch(err => 
        {console.log(err)
      })
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Title />
      <Section data={apodData} />
      <Footer />
    </div>
  );
}

export default App;
