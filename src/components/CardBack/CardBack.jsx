import React, { useState, useEffect } from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Favourites from "../Favourites/Favourites";

const CardBack = (props) => {
  const { beer, addFav, fav, removeFav } = props;
  const [isFav, setIsFav] = useState(false);

  const shortenDescription = (description) =>
    description.length < 200
      ? description
      : description.substring(0, 120) + "...";

  const checkFavourite = fav.find((favObject) => favObject.id === beer.id)
    ? true
    : false;

  const handleClick = (e) => {
    e.stopPropagation();
    if (!checkFavourite) {
      addFav(beer.id);
    } else {
      removeFav(beer.id);
    }
    setIsFav(!isFav);
  };

  useEffect(() => {
    setIsFav(checkFavourite);
  }, [checkFavourite]);

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
