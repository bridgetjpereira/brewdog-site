import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import Card from "./components/Card";

import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import Main from "./components/Main/Main.jsx";
import Routes from "./containers/Routes";
import NotFound from "./components/NotFound/NotFound.jsx";
import FilterList from "./components/FilterList";

import library from "./data/fa-library";
import beers from "./data/beers";
import filterSet from "./data/filters";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState(filterSet);

  return (
    <>
      <section className={styles.nav}>
        <NavBar
          searchText={searchText}
          setSearchText={setSearchText}
          filters={filters}
          setFilters={setFilters}
        />
      </section>
      {/* <section>
        <Main beers={beers} />
      </section> */}
      <section className={styles.content}>
        <Routes searchText={searchText} />
      </section>
    </>
  );
};

export default App;
