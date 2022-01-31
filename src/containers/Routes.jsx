import React from "react";
import { Router } from "@reach/router";

import Main from "../components/Main";
import NotFound from "../components/NotFound";
import FeedbackPanel from "../components/FeedbackPanel";
import filters from "../data/filters";
// import beers from "./beers";

const Routes = (props) => {
  const { searchText, filters, setFilters, beers } = props;
  return (
    <Router>
      <Main
        path="/"
        searchText={searchText}
        filterItems={filters}
        setFilters={setFilters}
        beers={beers}
      />
      <NotFound default />
    </Router>
  );
};

export default Routes;
