import React, { useState } from "react";

// const Checkbox = (props) => {
//   const { filterItem, setFilters } = props;
//   const isChecked = filterItem.checked;

//   console.log(isChecked);

//   return (
//     <>
//       <input
//         type="checkbox"
//         value={isChecked}
//         onChange={() => setFilters((isChecked) => !isChecked)}
//       />
//       {filterItem.checked ? "checked" : "not checked"}
//     </>
//   );
// };

// export default Checkbox;

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked((checked) => !checked);
  };
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />{" "}
      {checked ? "checked" : "not checked"}
    </>
  );
};

export default Checkbox;
