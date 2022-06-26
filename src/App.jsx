import React, { useState, useCallback, useEffect } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import Routes from "./containers/Routes";
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
            beers={beers}
          />
        </section>
      </div>
    </>
  );
};

export default App;

// const getHighAlcoholBeers = () => {
//   fetch("https://api.punkapi.com/v2/beersabv_gt_6")
//     .then((response) => response.json())
//     .then((data) => setBeers(data));
// };

// useEffect(() => {
//   getHighAlcoholBeers();
// }, []);

// const getClassicRange = () => {
//   fetch("https://api.punkapi.com/v2/beersbrewed_before01-2010")
//     .then((response) => response.json())
//     .then((data) => setBeers(data));
// };

// useEffect(() => {
//   getClassicRange();
// }, []);
