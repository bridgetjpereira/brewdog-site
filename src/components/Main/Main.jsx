import React from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList";
import beers from "../../data/beers";
import FeedbackPanel from "../../components/FeedbackPanel";

// {beers.map(getCardListJSX)}/>;\
// const getCardListJSX = (beer) => <CardList beer={beer} key={beer.id}

const Main = (props) => {
  const { searchText } = props;

  const matchingBeers = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(searchText.toLowerCase());
  });

  const contentJSX = matchingBeers.length ? (
    <CardList beers={matchingBeers} />
  ) : (
    <FeedbackPanel
      header="No Matches"
      text="None of our beers match that search"
    />
  );

  return <section className={styles.main}>{contentJSX}</section>;
};

export default Main;
