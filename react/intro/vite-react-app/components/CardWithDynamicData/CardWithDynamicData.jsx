// const CardWithDynamicData = (props) => {

//   return (
//     <div>
//       <h4>{props.title ?? "No title"}</h4>
//       <p>{props.description ?? "No description"}</p>
//     </div>
//   );
// };

// export default CardWithDynamicData;

import styles from "./CardWithDynamicData.module.scss";

import Button from "../Button/Button";

const CardWithDynamicData = ({ title, description, buttonText }) => {
  // const classesToAdd = [styles.card];
  // description % 2 === 0
  //   ? classesToAdd.push(styles["even-card"])
  //   : classesToAdd.push(styles["odd-card"]);

  return (
    <div
      className={`${styles.card} ${
        description % 2 === 0 ? styles["even-card"] : styles["odd-card"]
      }`}
    >
      <h4>{title ?? "No title"}</h4>
      <p>{description ?? "No description"}</p>
      <Button text={buttonText} />
    </div>
  );
};

export default CardWithDynamicData;
