import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList";
import FeedbackPanel from "../../components/FeedbackPanel";
import filterList from "../../data/filters";
import filters from "../../data/filters";

const Main = (props) => {
  const { searchText, filterItems, setFilters, beers } = props;
  const toggleClicked = (filterItem) => {
    filterItem.isClicked = !filterItem.isClicked;
  };

  const matchingBeers = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(searchText.toLowerCase());
  });

  const contentJSX = matchingBeers.length ? (
    <CardList beers={matchingBeers} toggleClicked={toggleClicked} />
  ) : (
    <FeedbackPanel
      header="No Matches"
      text="None of our beers match that search"
    />
  );

  return <section className={styles.main}>{contentJSX}</section>;
};

export default Main;
