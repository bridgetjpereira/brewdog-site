import React from "react";
import styles from "./Main.module.scss";
import CardList from "../CardList";
import beers from "../../data/beers";
import FeedbackPanel from "../../components/FeedbackPanel";
import filters from "../../data/filters";
// import filters from "../../data/filters.js";

const Main = (props) => {
  const { searchText, filterItems } = props;

  // const FilterItems = (filter) => {
  //   filter.isChecked = !filter.isChecked;
  // };

  // const checkHighAlcohol = (beerList) => (
  //   // check if high alcohol is ticked
  //   const highAlcohol = beer.abv.key > 6;
  //   //  if  highAlcohol.includes(checked);
  //   // if ticked - filter and return
  //   // if not return original array
  // );

  //let beerCheck1 = checkHighAlochol(beers)
  //let beerCheck2 = checkClassicRange(beerCheck1)

  // const checkHighAlcohol = (beerList) => {
  //   const highAlcohol = beer.abv.key > 6;
  //   highAlcohol.includes(checked)
  //     ? (highAlcoholBeerList = beerList.filter(highAlcohol))
  //     : beerList;
  // };

  // const checkClassicRange = (beer) => {
  //   const classicRange = beer.first_brewed.key < 2010;
  //   classicRange.includes(checked)
  //     ? (classicRangeBeerList = beers.filter(classicRange))
  //     : beers;
  // };

  // const checkHighAcidity = (beer) => {
  //   const highAcidity = beer.ph.key < 4;
  //   highAcidity.includes(checked)
  //     ? highAcidityBeersList = beers.filter(highAcidity)
  //     : beers;
  //   // check if high acidity is ticked
  //   // if ticked - filter and return
  //   // if not return original array
  // };

  // //  const matchingBeers = beers.filter((beer) => {
  // //   //check filters then proceed to filter below
  // //   const beerName = beer.name.toLowerCase();
  // //   return beerName.includes(searchText, checked);
  // // });

  // // const checkClassicRange = (beerList) => (
  // //   // check if classic range is ticked
  // //   // if ticked - filter and return
  // //   // if not return original array
  // // );

  // // const checkHighAcidity = (beerList) => (
  // //   // check if high acidity is ticked
  // //   // if ticked - filter and return
  // //   // if not return original array
  // // );

  // const checkFilters = (beer) =>
  //   checkClassicRange
  //     ? classicRangeBeerList
  //     : checkHighAcidity
  //     ? highAcidityBeerList
  //     : checkHighAlcohol
  //     ? highAlcoholBeerList
  //     : beers;
  // apply high alcohol check to beer list array into a const
  // apply classic range check against result above
  // apply acidity check against range above

  const matchingBeers = beers.filter((beer) => {
    //check filters then proceed to filter below
    // checkFilters();
    const beerName = beer.name.toLowerCase();
    return beerName.includes(searchText.toLowerCase());
  });

  // const getHighAlcohol = beers.filter((beer) => {
  //   const highAlcohol = beer.abv.key > 6;
  //   return highAlcohol.includes(checked);
  // });

  // const getClassicRange = beers.filter((beer) => {
  //   const classicRange = beer.first_brewed.key < 2010;
  //   return classicRange.includes(checked);
  // });

  // const getHighAcidity = beers.filter((beer) => {
  //   const highAcidity = beer.ph.key < 4;
  //   return highAcidity.includes(checked);
  // });

  const contentJSX = matchingBeers.length ? (
    <CardList beers={matchingBeers} />
  ) : (
    <FeedbackPanel
      header="No Matches"
      text="None of our beers match that search"
    />
  );

  // beerName.includes(searchText.toLowerCase() ? && this.checked === highAcidity?
  //   <CardList beers={getHighAcidity} />
  // ):(

  // beerName.includes(searchText.toLowerCase()? && this.checked === classicRange?(
  //   <CardList beers={getClassicRange} />
  // ):(
  // beerName.includes(searchText.toLowerCase()? && this === !checked? (

  // ):(
  //   <CardList beers={getClassicRange} />

  //   :(
  //
  //   )
  // );

  //   <CardList beers={getClassicRange}/>
  // ) : (
  //   <CardList beers={getHighAcidity}/>
  // ) : (
  //   <CardList beers={getHighAlcohol}/>
  // // ) : (
  //   <FeedbackPanel
  //     header="No Matches"
  //     text="None of our beers match that search"
  //   />
  // );
  
  return <section className={styles.main}>{contentJSX}</section>;
};

export default Main;

// const FilterList = (props) => {
//   const { filters, setFilters } = props;

//   const filteredItems = filters.filter((filter) => filter.isChecked);

//   const contentJSX = filteredItems.length ? (
//     <CardList beers={filteredItems} />
//   ) : (
//     <FeedbackPanel
//       header="No Filtered Items"
//       text="Try returning to the main page and searching for your beer of choice"
//     />

//     // const { filters, setFilters } = props;

//     // const getFilterItemJsx = (filterItem) => (
//     //   <div className={styles.FilterList} key={filterItem.id}>
//     //     <FilterItem filterItem={filterItem} setFilters={setFilters} />
//     //     {/* <Checkbox/> */}
//     //   </div>
//   );
//   return <section className={styles.FilterList}>{contentJSX}</section>;
// };
