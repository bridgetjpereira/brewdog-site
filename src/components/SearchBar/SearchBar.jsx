import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  const { placeholder, searchText, setSearchText } = props;

  const input = (
    <input
      type="text"
      placeholder={placeholder}
      value={searchText}
      onInput={(e) => setSearchText(e.target.value)}
    />
  );

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchTitle}>
        <span className={styles.fa}>
          <FontAwesomeIcon icon="search" /> {input}
        </span>
        {/* Search */}
      </div>
    </div>
  );
};

export default SearchBar;

// {/* <div className={styles.searchBar}>
//       <div className={styles.searchTitle}>
//         <span className={styles.fa} onClick={() => setIsOpen(!isOpen)}>
//          Search <FontAwesomeIcon icon="search" /> {input}
//         </span>
//         {/* Search */}
//       </div> */}
