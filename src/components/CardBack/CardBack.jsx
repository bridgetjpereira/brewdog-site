// import React, { useState } from "react";
// import styles from "./CardBack.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const CardBack = (props) => {
//   const { beer, toggleFav } = props;
//   const [isFav, setIsFav] = useState(beer.isFav);

//   const shortenInstructions = (instructions) =>
//     instructions.length < 300
//       ? instructions
//       : instructions.substring(0, 200) + "...";

//   const handleClick = (e) => {
//     e.stopPropagation();
//     toggleFav(recipe);
//     setIsFav(!isFav);
//   };

//   const { ingredients, strMeal, strInstructions } = props.recipe;
//   const heartIcon = isFav ? ["fas", "heart"] : ["far", "heart"];

//   return (
//     <section className={styles.cardBack}>
//       <span className={styles.heart} onClick={handleClick}>
//         <FontAwesomeIcon icon={heartIcon} />
//       </span>
//       <h2>{strMeal}</h2>
//       <h3>Instructions</h3>
//       <p>{shortenInstructions(strInstructions)}</p>
//       <h3>Ingredients</h3>
//       <div className={styles.list}>
//       </div>
//     </section>
//   );
// };

// export default CardBack;
