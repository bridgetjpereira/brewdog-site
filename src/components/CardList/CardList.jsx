import React, { useEffect } from "react";
import Card from "../Card";
import styles from "./CardList.module.scss";

const CardList = (props) => {
  const { beers, addFav, fav, removeFav } = props;

  const getCardJsx = (beer) => (
    <div className={styles.CardList} key={beer.name}>
      <Card beer={beer} addFav={addFav} fav={fav} removeFav={removeFav} />
    </div>
  );

  return <section className={styles.CardList}>{beers.map(getCardJsx)}</section>;
};
//   return (
//       <Card beer={beer} />
//   );
// };

export default CardList;
