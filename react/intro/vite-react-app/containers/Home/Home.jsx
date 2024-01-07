import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Basic React Concepts</h2>
      <Card />
      <Card />
    </main>
  );
};

export default Home;
