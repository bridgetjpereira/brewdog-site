import React, { useState } from "react";
import styles from "./FilterList.module.scss";
import Navbar from "../NavBar/NavBar";
import FilterItem from "../FilterItem/FilterItem";
import Checkbox from "../Checkbox/Checkbox";

const FilterList = (props) => {
  const { filters, setFilters } = props;

  const getFilterItemJsx = (filterItem) => (
    <div className={styles.FilterList} key={filterItem.id}>
      <FilterItem filterItem={filterItem} setFilters={setFilters} />
      {/* <Checkbox/> */}
    </div>
  );

  return (
    <>
      <section className={styles.FilterList}>
        <h2 className={styles.filter} filter>
          Filters
        </h2>
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
