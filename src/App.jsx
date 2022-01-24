import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import Card from "./components/Card";

import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import Main from "./components/Main/Main.jsx";
import Routes from "./containers/Routes";
import NotFound from "./components/NotFound/NotFound.jsx";
import FilterList from "./components/FilterList";

import library from "./data/fa-library";
import beers from "./data/beers";
import Filters from "./data/filters";



// import Filters from "../../data/filters.js"

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState(Filters);

  return (
    <>
      <div>
        <section className={styles.nav}>
          <NavBar
            searchText={searchText}
            setSearchText={setSearchText}
            filters={filters}
            setFilters={setFilters}
          />
        </section>

        <section className={styles.content}>
          <Routes searchText={searchText} filters={filters} />
        </section>
      </div>
    </>
  );
};

// import React from "react";
// import background from "./img/placeholder.png";

// function App() {
//   return (
//     <div style={{ backgroundImage: `url(${background})` }}>
//       Hello World
//     </div>
//   );
// }

// export default App;

// https://www.freepik.com/free-vector/abstract-grunge-texture-with-halftone-effect_16738381.htm#query=background&position=15&from_view=keyword

export default App;
