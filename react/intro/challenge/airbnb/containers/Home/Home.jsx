import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";
import Category from "../../components/Category/Category";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles["category-container"]}>
        <Category title={"Amazing pools"} />
        <Category title={"Beach front"} />
        <Category title={"Tiny homes"} />
      </div>
      <div className={styles["card-container"]}>
        <Card
          location={"Mount Martha, Australia"}
          distance={43}
          date={"4 - 9 Feb"}
          price={"7,115"}
        />
        <Card
          location={"Portsea, Australia"}
          distance={61}
          date={"1 - 6 Feb"}
          price={"10,976"}
        />
        <Card
          location={"Mount Martha, Australia"}
          distance={50}
          date={"10 - 15 Jan"}
          price={"8,146"}
        />
      </div>
    </div>
  );
};

export default Home;
