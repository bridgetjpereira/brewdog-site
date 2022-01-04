import React from "react";
import Card from "./components/Card";
import beers from "./data/beers";

const App = () => {
  return (
    <div>
      <Card beer={beers[2]} />
    </div>
  );
};

export default App;
