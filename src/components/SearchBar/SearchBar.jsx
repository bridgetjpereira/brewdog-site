import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import beers from "../../data/beers";

const SearchBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { placeholder, searchText, setSearchText } = props;

  const input = isOpen ? (
    <input
      type="text"
      placeholder={placeholder}
      value={searchText}
      onInput={(e) => setSearchText(e.target.value)}
    />
  ) : null;

  // //added this
  // const matchingBeers = beers.filter((beer) => {
  //   const beerName = beer.name.toLowerCase();
  //   return beerName.includes(searchText);
  // });
  // //

  // const contentJSX = matchingBeers.length ? (
  //   <CardList beers={matchingBeers} />
  // ) : (
  //   <FeedbackPanel
  //     header="No Matches"
  //     text="None of our beers match that search"
  //   />
  // );

  // return <section className={styles.SearchBar}>{contentJSX} </section>;

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchTitle}>Search</div>
      {input}
      <span className={styles.fa} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon="search" />
      </span>
    </div>
  );
};

export default SearchBar;
