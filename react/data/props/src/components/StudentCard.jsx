const StudentCard = ({
  name = "No name provided",
  age = "No age provided",
  location = "No location provided",
  isAgeVisible,
  isLocationVisible,
}) => {
  return (
    <article>
      <h3>{name}</h3>
      {isAgeVisible && <p>{age}</p>}
      {isLocationVisible && <p>{location}</p>}
    </article>
  );
};

export default StudentCard;
