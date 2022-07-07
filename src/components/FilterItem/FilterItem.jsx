import React, { useState } from "react";
import styles from "./FilterItem.module.scss";
import Checkbox from "../Checkbox/Checkbox";

const FilterItem = (props) => {
  const {
    filter,
    setFilters,
    toggleClicked,
    toggleHighABVBeers,
    toggleBrewedBefore2010,
    toggleHighAcidityBeers,
  } = props;

  return (
    <>
      <li className={styles.filterItem}>
        <ul>
          {}
          <Checkbox
            filter={filter}
            setFilters={setFilters}
            toggleClicked={toggleClicked}
            toggleHighABVBeers={toggleHighABVBeers}
            toggleBrewedBefore2010={toggleBrewedBefore2010}
            toggleHighAcidityBeers={toggleHighAcidityBeers}
          />
          {filter.name} {filter.value}
        </ul>
      </li>
    </>
  );
};

export default FilterItem;
