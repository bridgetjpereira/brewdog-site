import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import FilterList from "../FilterList";
import FilterItem from "../FilterItem/FilterItem";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import filters from "../../data/filters";

const Navbar = (props) => {
  const { searchText, setSearchText, filters, setFilters } = props;
  const { filterName } = props;
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div className={styles.nav}>
          <h1>Brewdog Beers</h1>
        </div>
      </Link>

      <SearchBar />
      <div className={styles.searchPanel}>
        <SearchBar
          placeholder="Search for beers..."
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <section className={styles.FilterList}>
          <FilterList filters={filters} setFilters={setFilters} />
        </section>
        {/* <section className={styles.FilterItem}>
        <FilterItem />
      </section> */}
      </div>
    </div>
  );
};

export default Navbar;
