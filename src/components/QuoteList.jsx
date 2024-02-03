import PropTypes from "prop-types";
import QuoteItem from "./QuoteItem";

function QuoteList(quotes) {
  return (
    <ul className="main__list">
      <li className="main__list--listItem">
        <QuoteItem name="Ross" quote="Pivot! Pivot! Pivot! Pivot! Pivot!" />
      </li>
    </ul>
  );
}

QuoteList.propTypes = {
  quotes: PropTypes.array,
};
export default QuoteList;
