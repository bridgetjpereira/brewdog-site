import React from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList";
import beers from "../../data/beers";
import FeedbackPanel from "../../components/FeedbackPanel";
import Filters from "../../data/beers";

// {beers.map(getCardListJSX)}/>;\
// const getCardListJSX = (beer) => <CardList beer={beer} key={beer.id}

const Main = (props) => {
  const { searchText, checked } = props;

  

  const matchingBeers = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();


  const getHighAlcohol = beers.filter((beer) => {
    const highAlcohol = beer.abv.key > 6;
    return highAlcohol.includes(checked);
  });

  const getClassicRange = beers.filter((beer) => {
    const classicRange = beer.first_brewed.key < 2010;
    return classicRange.includes(checked);
  });


  const getHighAcidity = beers.filter((beer) => {
    const highAcidity = beer.ph.key < 4;
    return highAcidity.includes(checked);
  });


    const getHighAlcohol = beers.filter((beer) => {
    if (beerName.includes(searchText.toLowerCase()&& this.checked === highAlcohol);
    return (getHighAlcohol);
    if (beerName.includes(searchText.toLowerCase()&& this.checked === highAcidity);
    return (getHighAcidity);
    if (beerName.includes(searchText.toLowerCase()&& this.checked === classicRange)
    return getClassicRange;
    if (beerName.includes(searchText.toLowerCase()&& this === !checked)
    return (matchingBeers)
    else return 
    <FeedbackPanel
    header="No Matches"
    text="None of our beers match that search"
  />
  });

  const contentJSX = matchingBeers.length ? (
    <CardList beers={matchingBeers} />
   ) : (
  //   <CardList beers={getClassicRange}/>
  // ) : (
  //   <CardList beers={getHighAcidity}/>
  // ) : (
  //   <CardList beers={getHighAlcohol}/>
  // ) : (
    <FeedbackPanel
      header="No Matches"
      text="None of our beers match that search"
    />
  );

  return <section className={styles.main}>{contentJSX} </section>;
};

export default Main;
