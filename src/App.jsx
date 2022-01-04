import React from "react";
import Card from "./components/Card";
import beers from "./data/beers";
import styles from "./App.module.scss";
import SearchBox from "./components/SearchBox/SearchBox";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  const getCardFrontJSX = (beer) => <Card beer={beer} key={beer.id} />;

  return (
    <>
      <div className={styles.App}>{beers.map(getCardFrontJSX)}</div>
      <section className={styles.NavBar}>
        <NavBar />;
      </section>
      ;
    </>
  );
};

export default App;
