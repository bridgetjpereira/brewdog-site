import React, { useState } from "react";

const Checkbox = (props) => {
  const { filterItem, setFilters } = props;
  const isChecked = filterItem.checked;

  console.log(isChecked);

  return (
    <>
      <input
        type="checkbox"
        value={isChecked}
        onChange={() => setFilters((isChecked) => !isChecked)}
      />
      {filterItem.checked ? "checked" : "not checked"}
    </>
  );
};

export default Checkbox;
