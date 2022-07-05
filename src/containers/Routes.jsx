import React from "react";
import { Router } from "@reach/router";
import Main from "../components/Main";
import NotFound from "../components/NotFound";
import filters from "../data/filters";
import Favourites from "../components/Favourites/Favourites";

const Routes = (props) => {
  const {
    searchText,
    filters,
    setFilters,
    beers,
    fav,
    setFav,
    addFav,
    toggleHighABVBeers,
  } = props;

  console.log(fav);
  return (
    <Router>
      <Main
        path="/brewdog-site"
        searchText={searchText}
        filterItems={filters}
        setFilters={setFilters}
        beers={beers}
        fav={fav}
        setFav={setFav}
        addFav={addFav}
        toggleHighABVBeers={toggleHighABVBeers}
      />
      <Favourites path="/brewdog-site/favourites" fav={fav} setFav={setFav} />
      <NotFound default />
    </Router>
  );
};

export default Routes;
