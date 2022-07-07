import React, { useEffect, useState } from "react";
import styles from "./Favourites.module.scss";
import CardList from "../CardList";
import FeedbackPanel from "../FeedbackPanel";
import { useLocation } from "@reach/router";

const Favourites = (props) => {
  const { fav, setFav, addFav, removeFav } = props;

  const contentJSX = fav.length ? (
    <CardList beers={fav} addFav={addFav} fav={fav} removeFav={removeFav} />
  ) : (
    <FeedbackPanel
      header="No Matches"
      text="None of our beers match that search"
    />
  );

  return <section className={styles.Favourites}>{contentJSX}</section>;
};

export default Favourites;
