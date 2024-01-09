import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";
import Category from "../../components/Category/Category";
import houses from "../../src/data/data.json";
import filters from "../../src/data/filters.json";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles["category-container"]}>
        {filters.map((filter) => {
          return (
            <Category
              key={filter.id}
              title={filter.title}
              imgSrc={filter.imgSrc}
            />
          );
        })}
      </div>

      <div className={styles["card-container"]}>
        {houses.map((house) => {
          return (
            <Card
              key={house.id}
              location={house.location}
              distance={house.distance}
              date={house.date}
              price={house.price}
              imgSrc={house.imgSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
