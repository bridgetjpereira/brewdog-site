import React from "react";
import { Router } from "@reach/router";
import Main from "../components/Main";
import NotFound from "../components/NotFound";
import Favourites from "../components/Favourites/Favourites";

const Routes = (props) => {
  const { searchText, filters, beers, fav, setFav, addFav, removeFav } = props;

  return (
    <Router>
      <Main
        path="/brewdog-site"
        searchText={searchText}
        filterItems={filters}
        beers={beers}
        fav={fav}
        setFav={setFav}
        addFav={addFav}
        removeFav={removeFav}
      />
      <Favourites
        path="/brewdog-site/favourites"
        fav={fav}
        setFav={setFav}
        addFav={addFav}
        removeFav={removeFav}
      />
      <NotFound default />
    </Router>
  );
};

export default Routes;
