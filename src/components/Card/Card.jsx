import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.beer.image_url} alt="Best Beer" />

      <div className={styles.cardTitle}>{props.beer.name}</div>
      <div className={styles.tagTitle}>{props.beer.tagline}</div>

      <section className={styles.beerDetails}>
        <p>
          <span className={styles.description}>{props.beer.description}</span>
        </p>
      </section>
    </div>
  );
};

export default Card;
