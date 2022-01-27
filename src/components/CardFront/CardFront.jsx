import React from "react";
import styles from "./CardFront.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFront = (props) => {
  const { name, image_url, tagline, } = props.beer;

  return (
    <div className={styles.cardFront}>
      <img src={image_url} alt="Best Beer" />
      <div className={styles.cardTitle}>
        <h2>{name}</h2>
      </div>

      <div className={styles.tagLine}>
        <h2>{tagline}</h2>
      </div>
    </div>
  );
};

export default CardFront;
