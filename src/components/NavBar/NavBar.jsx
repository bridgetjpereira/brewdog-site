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
          <div className={styles.links}>
          <div className={styles.homeLink}>
            <Link
              to="/brewdog-site"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </Link>
          </div>
          <br />
          <div className={styles.favouritesLink}>
            <Link
              to="/brewdog-site/favourites"
              style={{ textDecoration: "none", color: "white" }}
            >
              Favourites
            </Link>
          </div>
          </div>
          <FilterList
            filters={filters}
            setFilters={setFilters}
            toggleClicked={toggleClicked}
            toggleHighABVBeers={toggleHighABVBeers}
            toggleBrewedBefore2010={toggleBrewedBefore2010}
            toggleHighAcidityBeers={toggleHighAcidityBeers}
          />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
