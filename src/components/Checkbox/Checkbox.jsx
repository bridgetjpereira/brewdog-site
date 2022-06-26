import React, { useState, useEffect, useReducer } from "react";
import styles from "./Checkbox.module.scss";
import filters from "../../data/filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkbox = (props) => {
  const { filter, setFilters, toggleClicked } = props;
  const [isClicked, setisClicked] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    toggleClicked(filter); //Updates filters.js with changed state of checkbox
    setisClicked(!isClicked); //Sets state of filters in app.jsx to new filters.jsx
    setFilters(filters);
  };
  const checkboxIcon = isClicked ? ["fas", "check-square"] : ["far", "square"];

  return (
    <>
      <span className={styles.checkbox}>
        <FontAwesomeIcon
          icon={checkboxIcon}
          value={isClicked}
          onClick={handleClick}
        />
      </span>
    </>
  );
};

export default Checkbox;
