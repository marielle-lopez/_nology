import { useState } from "react";

const Card = ({ heading, content }) => {
  const [contentShown, setContentShown] = useState(false);

  return (
    <article>
      <h2>{heading}</h2>
      <button onClick={() => setContentShown(!contentShown)}>
        {contentShown ? "See less" : "See more"}
      </button>
      {contentShown && <p>{content}</p>}
    </article>
  );
};

export default Card;
