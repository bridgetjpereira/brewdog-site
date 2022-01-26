import React from "react";
import { Router } from "@reach/router";

import Main from "../components/Main";
import NotFound from "../components/NotFound";
import FeedbackPanel from "../components/FeedbackPanel";
import filters from "../data/filters";

const Routes = (props) => {
  const { searchText, filters, setFilters } = props;
  return (
    <Router>
      <Main
        path="/"
        searchText={searchText}
        filterItems={filters}
        setFilters={setFilters}
      />
      <NotFound default />
    </Router>
  );
};

export default Routes;
