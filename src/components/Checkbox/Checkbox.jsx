import React, { useState } from "react";
import styles from "./Checkbox.module.scss";
import filters from "../../data/filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkbox = (props) => {
  const { filterItem, setFilters, toggleClicked } = props;
  const [isClicked, setisClicked] = useState(filterItem.isClicked);

  const handleClick = (e) => {
    e.stopPropagation();
    toggleClicked(filterItem); //Updates filters.js with changed state of checkbox
    setisClicked(!isClicked); //Sets state of filters in app.jsx to new filters.jsx
  };
  const checkboxIcon = isClicked ? ["fas", "check-square"] : ["far", "square"];

  console.log(checkboxIcon);

  return (
    <>
      <span className={styles.checkbox} onClick={handleClick}>
        <FontAwesomeIcon icon={checkboxIcon} />
      </span>
      {/* {/* /* <input
          type="checkbox"
          value={filterItem.isChecked}
          onClick={handleClick}
          // onChange={(e) => setFilters(e.target.checked)}
        /> */
      /* {filterItem.checked ? "I've been ticked!" : ""} */}
    </>
  );
};

export default Checkbox;

// const Checkbox = () => {
//   const [checked, setChecked] = useState(false);

//   const toggle = () => {
//     setChecked((checked) => !checked);
//   };
//   return (
//     <>
//       <input type="checkbox" value={checked} onChange={toggle} />{" "}
//       {checked ? "checked" : "not checked"}
//     </>
//   );
