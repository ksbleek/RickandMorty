import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../components/Card";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setCharacters(response.data.results);
  };
  useEffect(() => {
    getCharacters();
  }, []);

  console.log(characters);
  return (
    <>
      <div class="card-body">
        {characters.length ? (
          characters.map((c, i) => <CharacterCard key={i} character={c} />)
        ) : (
          <div>Loading</div>
        )}
      </div>
    </>
  );
}

export default Characters;
