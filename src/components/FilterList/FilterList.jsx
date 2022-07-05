import React, { useState } from "react";
import styles from "./FilterList.module.scss";
import FilterItem from "../FilterItem";

const FilterList = (props) => {
  const {
    filters,
    setFilters,
    toggleClicked,
    toggleHighABVBeers,
    toggleBrewedBefore2010,
  } = props;

  const getFilterItemJsx = (filter) => (
    <div className={styles.FilterList} key={filter.id}>
      <FilterItem
        filter={filter}
        setFilters={setFilters}
        toggleClicked={toggleClicked}
        toggleHighABVBeers={toggleHighABVBeers}
        toggleBrewedBefore2010={toggleBrewedBefore2010}
      />
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
