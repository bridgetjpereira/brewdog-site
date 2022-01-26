import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });




// const Card = (props) => {
//     return (
//       <div className={styles.card}>
//         <img src={props.beer.image_url} alt="Best Beer" />

//         <div className={styles.cardTitle}>{props.beer.name}</div>
//         <div className={styles.tagTitle}>{props.beer.tagline}</div>

//         <section className={styles.beerDetails}>
//           <p>
//             <span className={styles.description}>{props.beer.description}</span>
//           </p>
//         </section>
//       </div>
//     );
//   };

//   export default Card;

// Test: it should render beer image on the page...
//       it should render cardtitle on the page...
//       it should render tagline
//       it should render beerDetails
//       it should render description
