import React from "react";
import Card from "../Card";
import styles from "./CardList.module.scss";

const CardList = (props) => {
  const { beers } = props;

  const getCardJsx = (beer) => (
    <div className={styles.CardList} key={beer.name}>
      <Card beer={beer} toggleFav={props.addFav} />
    </div>
  );

  return <section className={styles.CardList}>{beers.map(getCardJsx)}</section>;
};
//   return (
//       <Card beer={beer} />
//   );
// };

export default CardList;
