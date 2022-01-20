import React, { useState } from "react";
import styles from "./Checkbox.module.scss";
import filters from "../../data/filters";

const Checkbox = (props) => {
  const { filterItem, setFilters, toggleClicked } = props;

  const handleClick = (e) => {
    e.stopPropagation();
    toggleClicked(filterItem);
    console.log(filterItem);
    // setFilters(!filterItem.isChecked);
  };
  console.log(filterItem.isChecked);

  return (
    <>
      <div className={styles.Checkbox}>
        <input
          type="checkbox"
          value={filterItem.isChecked}
          onChange={handleClick}
        />
        {/* {filterItem.checked ? "I've been ticked!" : ""} */}
      </div>
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
