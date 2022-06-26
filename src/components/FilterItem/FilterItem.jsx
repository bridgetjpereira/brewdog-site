import React, { useState } from "react";
import styles from "./FilterItem.module.scss";
import Checkbox from "../Checkbox/Checkbox";

const FilterItem = (props) => {
  const { filter, setFilters, toggleClicked } = props;

  

  return (
    <>
      <li className={styles.filterItem}>
        <ul>
          {}
          <Checkbox
            filter={filter}
            setFilters={setFilters}
            toggleClicked={toggleClicked}
          />
          {filter.name} {filter.value}
        </ul>
      </li>
    </>
  );
};

export default FilterItem;
