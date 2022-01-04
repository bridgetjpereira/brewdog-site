import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.beer.image_url} alt="Best Beer" />

      <h1>{props.beer.name}</h1>
      <h2>{props.beer.tagline}</h2>

      <section className={styles.beerDetails}>
        <p>
          <span>{props.beer.description}</span>
        </p>
      </section>
    </div>
  );
};

export default Card;
