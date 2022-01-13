import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  const { searchText, setSearchText } = props;
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
      </div>
    </div>
  );
};

export default Navbar;
