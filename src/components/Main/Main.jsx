import React from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList";
import beers from "../../data/beers";
import FeedbackPanel from "../../components/FeedbackPanel";
import Filters from "../../data/beers";

// {beers.map(getCardListJSX)}/>;\
// const getCardListJSX = (beer) => <CardList beer={beer} key={beer.id}

const Main = (props) => {
  const { searchText, isClicked } = props;

  // const getHighAlcohol = beers.filter((beer) => {
  //   const highAlcohol = beer.abv > 6;
  //   return highAlcohol.includes(isClicked);
  // });

  // const getHighAcidity = beers.filter((beer) => {
  //   const highAcidity = beer.ph < 4;
  //   return highAcidity.includes(isClicked);
  // });

  // const getClassicRange = beers.filter((beer) => {
  //   const classicRange = beer.first_brewed < 2010;
  //   return classicRange.includes(isClicked);
  // });


  

  const matchingBeers = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();

    // const classicRange = beer.first_brewed < 2010;
    // const highAcidity = beer.ph < 4;
    // const highAlcohol = beer.abv > 6;


    return beerName.includes(searchText.toLowerCase()&& isClicked);
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
