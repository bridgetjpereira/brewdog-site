import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import FilterList from "../FilterList";
import { Link } from "@reach/router";

const Navbar = (props) => {
  const {
    searchText,
    setSearchText,
    filters,
    setFilters,
    toggleHighABVBeers,
    toggleBrewedBefore2010,
    toggleHighAcidityBeers,
  } = props;

  const toggleClicked = (filter) => {
    filter.isClicked = !filter.isClicked;
  };

  return (
    <div className={styles.nav}>
      <Link to="/"> </Link>
      <div className={styles.navTitle}>
        <h1 className={styles.title}>Brewdog Beers</h1>
        <section className={styles.FilterList}>
          <div className={styles.searchPanel}>
            <SearchBar
              placeholder="Search for beers..."
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </div>

          <FilterList
            filters={filters}
            setFilters={setFilters}
            toggleClicked={toggleClicked}
            toggleHighABVBeers={toggleHighABVBeers}
            toggleBrewedBefore2010={toggleBrewedBefore2010}
            toggleHighAcidityBeers={toggleHighAcidityBeers}
          />
          <div>
            <Link to="/brewdog-site">Home </Link>
            <br />
            <Link to="/brewdog-site/favourites">Favourites</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
