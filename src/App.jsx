import React, { useState, useCallback, useEffect } from "react";
import { Router, Link } from "@reach/router";
import Card from "./components/Card";

import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import Main from "./components/Main/Main.jsx";
import Routes from "./containers/Routes";
import NotFound from "./components/NotFound/NotFound.jsx";
import FilterList from "./components/FilterList";

import library from "./data/fa-library";
import Filters from "./data/filters";



const App = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState(Filters);
  const [beers, setBeers] = useState([]);

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((response) => setBeers(response));
  };

  useEffect(() => {
    getBeers();
  }, []);

  const updateFilters = useCallback(() => {
    setFilters(filters);

    console.log(filters);
  }, [filters]);

  return (
    <>
      <div>
        <section className={styles.nav}>
          <NavBar
            searchText={searchText}
            setSearchText={setSearchText}
            filters={filters}
            setFilters={updateFilters}
          />
        </section>

        <section className={styles.content}>
          <Routes
            searchText={searchText}
            filters={filters}
            setFilters={updateFilters}
          />
        </section>
      </div>
    </>
  );
};


export default App;
