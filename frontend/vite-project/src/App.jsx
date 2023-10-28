import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>vikash singh jokes</h1>
      <p>jokes: ${jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={jokes.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      )
      )
      }
    </>
  );
}

export default App;
