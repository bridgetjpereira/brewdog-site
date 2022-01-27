import React, { useState, useEffect, useReducer } from "react";
import styles from "./Checkbox.module.scss";
import filters from "../../data/filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkbox = (props) => {
  const { filter, setFilters, toggleClicked } = props;
  const [isClicked, setisClicked] = useState(false);

  // const [isClicked, setisClicked] = useReducer((checked) => !checked, false);

  // const [checkedState, setCheckedState] = useState(
  //   new Array(filters.length).fill(false)
  // );
  // const CheckboxComponent = () => {
  //   const [checkedState, setCheckedState] = useState(false);

  //   return(
  //     <div>
  //       <input type="checkbox"
  //       checked={checkedState}
  //       onChange={()=> setCheckedState((x)=> !x)}
  //      />
  //     </div>
  //   )
  // };

  // (filterItem.isClicked);
  // console.log("Checked State" + checkedState);

  const handleClick = (e) => {
    e.stopPropagation();
    toggleClicked(filter); //Updates filters.js with changed state of checkbox
    setisClicked(!isClicked); //Sets state of filters in app.jsx to new filters.jsx
    setFilters(filters);
  };
  const checkboxIcon = isClicked ? ["fas", "check-square"] : ["far", "square"];

  // console.log(filterItem);
  // console.log(checkboxIcon);

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
