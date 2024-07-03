import React from "react";
import Card from "react-bootstrap/Card";

function CharacterCard({ character }) {
  return (
    <Card class="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <span>Species: {character.species}</span>
          <span>Status: {character.status}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
