import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import beers from "../../data/beers";

const Card = (props) => {
  const [isFaceDown, setIsFaceDown] = useState(false);

  const { beer, addFav, fav, removeFav } = props;
  const flipStyles = isFaceDown ? styles.faceDown : "";

  return (
    <section
      className={`${styles.beerCard} ${flipStyles}`}
      onClick={() => setIsFaceDown(!isFaceDown)}
    >
      <div className={styles.front}>
        <CardFront beer={beer} />
      </div>
      <div className={styles.back}>
        <CardBack beer={beer} addFav={addFav} fav={fav} removeFav={removeFav} />
      </div>
    </section>
  );
};

export default Card;
