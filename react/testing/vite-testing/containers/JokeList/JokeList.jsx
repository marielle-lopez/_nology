const JokeList = ({ jokes }) => {
  return (
    <section>
      <h3>Found {jokes.length} jokes</h3>
      {jokes.map((data) => (
        <p key={data.id}>{data.joke}</p>
      ))}
    </section>
  );
};

export default JokeList;
