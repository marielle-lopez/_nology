import { useState, useEffect } from "react";

const RandomUserCard = ({ name, age, city }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
};

export default RandomUserCard;
