import React from "react";
import { Router } from "@reach/router";

import Main from "../components/Main";
import NotFound from "../components/NotFound";
import FeedbackPanel from "../components/FeedbackPanel";

const Routes = (props) => {
  const { searchText } = props;
  return (
    <Router>
      <Main path="/" searchText={searchText} />
      <NotFound default />
      
    </Router>
  );
};

export default Routes;
