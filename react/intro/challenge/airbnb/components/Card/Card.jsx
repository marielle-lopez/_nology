import styles from "./Card.module.scss";

const Card = ({ location, distance, date, price, imgSrc }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={`../public/assets/${imgSrc}`} />
      <div className={styles.information}>
        <p className={styles.location}>{location}</p>
        <p className={styles.distance}>{distance} kilometres away</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.price}>${price} AUD total</p>
      </div>
    </div>
  );
};

export default Card;
