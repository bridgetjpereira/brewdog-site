import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import FilterList from "../FilterList";
import FilterItem from "../FilterItem/FilterItem";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import filters from "../../data/filters";
import Checkbox from "../Checkbox";

const Navbar = (props) => {
  const { searchText, setSearchText, filters, setFilters } = props;
  const { filterName } = props;

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

          <FilterList filters={filters} setFilters={setFilters} />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
