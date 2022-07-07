import React, { useState, useEffect, useReducer } from "react";
import styles from "./Checkbox.module.scss";
import filters from "../../data/filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkbox = (props) => {
  const {
    filter,
    setFilters,
    toggleClicked,
    toggleHighABVBeers,
    toggleBrewedBefore2010,
    toggleHighAcidityBeers
  } = props;
  const [isClicked, setisClicked] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    toggleClicked(filter);
    setisClicked(!isClicked);
    setFilters(filters);
  };
  const checkboxIcon = isClicked ? ["fas", "check-square"] : ["far", "square"];

  let toggle = toggleHighABVBeers;

  if (filter.id == 1) {
    toggle = toggleHighABVBeers;
  } else if (filter.id == 2) {
    toggle = toggleBrewedBefore2010;
  } else {
    toggle = toggleHighAcidityBeers;
  }

  return (
    <>
      <span className={styles.checkbox}>
        <input type="checkbox" onClick={toggle} />
        {/* <input type="checkbox" onClick={toggleBrewedBefore2010} /> */}
      </span>
    </>
  );
};

export default Checkbox;
