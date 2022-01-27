// const { filters, setFilters } = props;

// const filteredItems = filters.filter((filter) => filter.isChecked);

// const contentJSX = filteredItems.length ? (
//   <CardList beers={filteredItems} />
// ) : (
//   <FeedbackPanel
//     header="No Filtered Items"
//     text="Try returning to the main page and searching for your beer of choice"
//   />

import React, { useState } from "react";
import styles from "./FilterList.module.scss";
import Navbar from "../NavBar/NavBar";
import FilterItem from "../FilterItem";

const FilterList = (props) => {
  const { filters, setFilters, toggleClicked } = props;

  const getFilterItemJsx = (filter) => (
    <div className={styles.FilterList} key={filter.id}>
      <FilterItem
        filter={filter}
        setFilters={setFilters}
        toggleClicked={toggleClicked}
      />
      {/* <Checkbox/> */}
    </div>
  );

  return (
    <>
      <section className={styles.FilterList}>
        <h2 className={styles.filter}>Filters</h2>
        {filters.map(getFilterItemJsx)}
      </section>
    </>
  );
};

export default FilterList;

// import React from "react";
// import Card from "../Card";
// import styles from "./CardList.module.scss";

// const CardList = (props) => {
//   const { beers } = props;

//   const getCardJsx = (beer) => (
//     <div className={styles.CardList} key={beer.name}>
//       <Card beer={beer} />
//     </div>
//   );

//   return <section className={styles.CardList}>{beers.map(getCardJsx)}</section>;
// };
// //   return (
// //       <Card beer={beer} />
// //   );
// // };

// export default CardList;
//  const newFilterArr= filters.split(',');
//  const newFilters=  newFilterArr.map (=>filterItem) return newFilters
//Transforming objects
// Objects lack many methods that exist for arrays, e.g. map, filter and others.

// If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

// Use Object.entries(obj) to get an array of key/value pairs from obj.
// Use array methods on that array, e.g. map, to transform these key/value pairs.
// Use Object.fromEntries(array) on the resulting array to turn it back into an object.
// For example, we have an object with prices, and would like to double them:
// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // convert prices to array, map each key/value pair into another pair
//   // and then fromEntries gives back the object
//   Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );
