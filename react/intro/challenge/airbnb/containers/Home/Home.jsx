import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";
import Category from "../../components/Category/Category";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles["category-container"]}>
        <Category title={"Amazing pools"} imgSrc="pool.png" />
        <Category title={"Beach front"} imgSrc="beach.png" />
        <Category title={"Tiny homes"} imgSrc="tiny-home.png" />
        <Category title={"The Arctic"} imgSrc="snowflake.png" />
        <Category title={"New"} imgSrc="new.png" />
      </div>
      <div className={styles["card-container"]}>
        <Card
          location={"Mount Martha, Australia"}
          distance={43}
          date={"4 - 9 Feb"}
          price={"7,115"}
          imgSrc="home1.jpg"
        />
        <Card
          location={"Portsea, Australia"}
          distance={61}
          date={"1 - 6 Feb"}
          price={"10,976"}
          imgSrc="home2.jpg"
        />
        <Card
          location={"Mount Martha, Australia"}
          distance={50}
          date={"10 - 15 Jan"}
          price={"8,146"}
          imgSrc="home3.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
