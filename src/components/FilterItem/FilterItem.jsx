import React, { useState } from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { filterItem } = props;
  //   const {isClicked, setIsClicked } = props;

  const input = isClicked ? (
    <input
      type="checkbox"
      value={isClicked}
      onClick={(e) => setIsClicked(e.target.value)}
    />
  ) : (
    <input
      type="checkbox"
      value={isClicked}
      onClick={(e) => setIsClicked(e.target.value)}
    />
  );

  return (
    <>
      <li className={styles.filterItem}>
        <ul>{filterItem.name}</ul>
        <ul>{filterItem.value}</ul>
        {input}
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
