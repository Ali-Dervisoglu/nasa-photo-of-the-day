import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PhotoCard from "./components/PhotoCard.js";

function App() {
  const [data, setData] = useState({});
  useEffect(()=> {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=zJCUQFtW0g6SS0GcspA1f6BPurtNaLj3tGWP7Z88")
    .then(res =>  {
      console.log(res);
      setData(res.data);
    });
  }, []); 
  
  return (
    <div className="App">
      {data && <PhotoCard title={data.title}
        url={data.url}
        explanation={data.explanation} 
        date = {data.date} />
  }
  </div>
  
  );
}

export default App;
