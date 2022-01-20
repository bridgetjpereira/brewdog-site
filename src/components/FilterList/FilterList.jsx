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
import FilterItem from "../FilterItem/FilterItem";

const FilterList = (props) => {
  const { filters, setFilters, toggleClicked } = props;

  const getFilterItemJsx = (filterItem) => (
    <div className={styles.FilterList} key={filterItem.id}>
      <FilterItem filterItem={filterItem} setFilters={setFilters} toggleClicked={toggleClicked}/>
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
