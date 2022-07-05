import React, { useState, useCallback, useEffect } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import Routes from "./containers/Routes";
import Filters from "./data/filters";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [highABVBeers, setHighABVBeers] = useState(false);
  const [brewedBefore2010, setBrewedBefore2010] = useState(false);
  const [filters, setFilters] = useState(Filters);
  const [beers, setBeers] = useState([]);
  const [fav, setFav] = useState([]);

  const addFav = (id) => {
    const newFavs = [...fav, beers.find((beer) => beer.id === id)];
    setFav(newFavs);
    console.log(fav);
  };

  const fetchBrewedBefore2010 = brewedBefore2010 ? `brewed_before01-2010` : "";

  const toggleBrewedBefore2010 = () => {
    setBrewedBefore2010(!brewedBefore2010);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const fetchBeersWithHighABV = highABVBeers ? `?abv_gt=6` : "";

  const toggleHighABVBeers = () => {
    setHighABVBeers(!highABVBeers);
  };

  const getBeers = () => {
    fetch(
      `https://api.punkapi.com/v2/beers${fetchBeersWithHighABV}${fetchBrewedBefore2010}`
    )
      .then((response) => response.json())
      .then((response) => setBeers(response));
  };

  useEffect(() => {
    getBeers();
  }, [highABVBeers][brewedBefore2010]);

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
            toggleHighABVBeers={toggleHighABVBeers}
            fav={fav}
          />
        </section>

        <section className={styles.content}>
          <Routes
            searchText={searchText}
            filters={filters}
            setFilters={updateFilters}
            beers={beers}
            fav={fav}
            setFav={setFav}
            addFav={addFav}
          />
        </section>
      </div>
    </>
  );
};

export default App;
