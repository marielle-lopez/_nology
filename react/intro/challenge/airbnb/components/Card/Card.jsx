import styles from "./Card.module.scss";

const Card = ({
  location,
  distance,
  date,
  price,
  imgSrc = "placeholder.jpg",
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={`../public/assets/${imgSrc}`} />
      <div className={styles.information}>
        <p className={styles.location}>{location}</p>
        <p className={styles.distance}>{distance} kilometres away</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.price}>
          <span className={styles["price--bold"]}>${price} AUD</span> total
        </p>
      </div>
    </div>
  );
};

export default Card;
