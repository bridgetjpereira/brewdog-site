import React from "react";
import Card from "./components/Card";
import beers from "./data/beers";
import styles from "./App.module.scss";

const App = () => {
  const getCardFrontJSX = (beer) => <Card beer={beer} />;
  return <div className={styles.App}>{beers.map(getCardFrontJSX)}</div>;
};

export default App;
