import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import FilterList from "../FilterList";

import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  const { searchText, setSearchText, filters, setFilters } = props;

  const toggleClicked = (filter) => {
    filter.isChecked = !filter.isChecked;
  };

  return (
    <div className={styles.nav}>
      <Link to="/"> </Link>
      <div className={styles.navTitle}>
        <h1>Brewdog Beers</h1>
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
          />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
