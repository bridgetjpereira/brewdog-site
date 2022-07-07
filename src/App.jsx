import React, { useState, useCallback, useEffect } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import Routes from "./containers/Routes";
import Filters from "./data/filters";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [highABVBeers, setHighABVBeers] = useState(false);
  const [brewedBefore2010, setBrewedBefore2010] = useState(false);
  const [highAcidity, setHighAcidity] = useState(false);
  const [filters, setFilters] = useState(Filters);
  const [beers, setBeers] = useState([]);
  const [fav, setFav] = useState([]);

  const addFav = (id) => {
    const newFavs = [...fav, beers.find((beer) => beer.id === id)];
    setFav(newFavs);
  };

  const removeFav = (id) => {
    const newFavList = fav.filter((beer) => beer.id !== id);
    setFav(newFavList);
  };

  const fetchHighAcidity = () => {
    const newHighAcidity = highAcidity
      ? [beers.filter((beer) => beer.ph < 4)]
      : beers;
    console.log(newHighAcidity);
    console.log(highAcidity);
    setBeers(newHighAcidity);
  };

  const toggleHighAcidityBeers = () => {
    setHighAcidity(!highAcidity);
  };

  const fetchBrewedBefore2010 = brewedBefore2010
    ? `?brewed_before=01-2010`
    : "";

  const toggleBrewedBefore2010 = () => {
    setBrewedBefore2010(!brewedBefore2010);
  };

  const fetchBeersWithHighABV = highABVBeers ? `?abv_gt=6` : "";

  const toggleHighABVBeers = () => {
    setHighABVBeers(!highABVBeers);
  };

  //const params which contains all parameters for the options
  let params = "";

  if (highABVBeers && brewedBefore2010) {
    params = `${fetchBeersWithHighABV}&${fetchBrewedBefore2010}`;
  } else if (highABVBeers && !brewedBefore2010) {
    params = `${fetchBeersWithHighABV}`;
  } else if (brewedBefore2010 && !highABVBeers) {
    params = `${fetchBrewedBefore2010}`;
  }

  const getBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers${params}`)
      .then((response) => response.json())
      .then((response) => setBeers(response));
  };

  useEffect(() => {
    getBeers();
  }, [params]);

  useEffect(() => {
    fetchHighAcidity();
  }, [highAcidity]);

  const updateFilters = useCallback(() => {
    setFilters(filters);

    console.log(filters);
  }, [filters]);

  // const addFavouriteBeer = (beer) => {
  //   const newFavouriteList = [...fav, beer];
  //   setFav(newFavouriteList);

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
            toggleBrewedBefore2010={toggleBrewedBefore2010}
            toggleHighAcidityBeers={toggleHighAcidityBeers}
            // fav={fav}
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
            removeFav={removeFav}
          />
        </section>
      </div>
    </>
  );
};

export default App;
