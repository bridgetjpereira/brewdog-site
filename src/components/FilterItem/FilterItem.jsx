import React, { useState } from "react";
// import beers from "../../data/beers";
import styles from "./FilterItem.module.scss";
import Checkbox from "../Checkbox/Checkbox";

const FilterItem = (props) => {
  const { filter, setFilters, toggleClicked } = props;

  //   const {isClicked, setIsClicked } = props;

  return (
    <>
      <li className={styles.filterItem}>
        <ul>
          {/* <div className={styles.box}> */}
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

// import React from "react";
// import styles from "./Card.module.scss";

// const Card = (props) => {
//   return (
//     <div className={styles.card}>
//       <img src={props.beer.image_url} alt="Best Beer" />

//       <h1>{props.beer.name}</h1>
//       <h2>{props.beer.tagline}</h2>

//       <section className={styles.beerDetails}>
//         <p>
//           <span>{props.beer.description}</span>
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Card;
