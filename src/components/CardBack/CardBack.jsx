import React, { useState } from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardBack = (props) => {
  const { beer, toggleFav } = props;
  const [isFav, setIsFav] = useState(beer.isFav);

  const shortenDescription = (description) =>
    description.length < 200
      ? description
      : description.substring(0, 120) + "...";

  const handleClick = (e) => {
    e.stopPropagation();
    toggleFav(beer);
    setIsFav(!isFav);
  };

  const { name, description } = props.beer;
  const heartIcon = isFav ? ["fas", "heart"] : ["far", "heart"];

  return (
    <section className={styles.cardBack}>
      <span className={styles.heart} onClick={handleClick}>
        <FontAwesomeIcon icon={heartIcon} />
      </span>
      {/* <p>
        <span className={styles.description}>{description}</span>
      </p> */}
      <h2>{name}</h2>
      <h3>Description</h3>
      <p>{shortenDescription(description)}</p>
    </section>
  );
};

export default CardBack;
