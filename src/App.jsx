import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Card } from './components/card';

function App() {
  const [characters, setChacacters] = useState([])

  useEffect(() => {
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setChacacters(data.results);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });

    // const task = {
    //     "id": 20,
    //     "name": "Ants in my Eyes Johnson",
    //     "status": "unknown",
    //     "species": "Human",
    //     "type": "Human with ants in his eyes",
    //     "gender": "Male",
    //     "origin": {
    //         "name": "unknown",
    //         "url": ""
    //     },
    //     "location": {
    //         "name": "Interdimensional Cable",
    //         "url": "https://rickandmortyapi.com/api/location/6"
    //     },
    //     "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
    //     "episode": [
    //         "https://rickandmortyapi.com/api/episode/8"
    //     ],
    //     "url": "https://rickandmortyapi.com/api/character/20",
    //     "created": "2017-11-04T22:34:53.659Z"
    // }

    // fetch().then().then().catch()

    fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(task),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setChacacters(data.results);
      })
      .catch((error) => {
        console.log("error", error);
      });

      // fetch("https://playground.4geeks.com/apis/fake/todos/user/pepe", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify([]),
      // })
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     setChacacters(data.results);
      //   })
      //   .catch((error) => {
      //     console.log("error", error);
      //   });

  }, []);

  console.log('characters', characters)
  return (
    <>
      <h1>Aquí voy a mostrar mi lista de personajes</h1>
      <div className="container">
        <div className="row">
          {
            characters.length > 0 ?
            characters.map((character)=>{
              return <Card key={character.id} character={character} />;
            })
            :
            "Loading"
          }
        </div>
      </div>
    </>
  );
}

export default App
