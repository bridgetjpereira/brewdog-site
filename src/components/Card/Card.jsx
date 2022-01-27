import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.beer.image_url} alt="Best Beer" />

      <div className={styles.cardTitle}>{props.beer.name}</div>
      <div className={styles.tagTitle}>{props.beer.tagline}</div>

      <section className={styles.beerDetails}>
        <p>
          <span className={styles.description}>{props.beer.description}</span>
        </p>
      </section>
    </div>
  );
};

export default Card;

// import React, { useState } from "react";
// import styles from "./Card.module.scss";
// import CardFront from "../CardFront";
// import CardBack from "../CardBack";

// const Card = (props) => {

//   const [isFaceDown, setIsFaceDown] = useState(false);

//   const { recipe, toggleFav } = props;
//   const flipStyles = isFaceDown ? styles.faceDown : "";

//   return (
//     <section
//       className={`${styles.recipeCard} ${flipStyles}`}
//       onClick={() => setIsFaceDown(!isFaceDown)}
//     >
//       <div className={styles.front}>
//         <CardFront recipe={recipe} />
//       </div>
//       <div className={styles.back}>
//         <CardBack recipe={recipe} toggleFav={toggleFav} />
//       </div>
//     </section>
//   );
// };

// export default Card;
