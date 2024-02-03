import PropTypes from "prop-types";
import QuoteItem from "./QuoteItem";

function QuoteList({quotes}) {
const htmlQuotes = quotes.map ((quote, idx) => (
<li key={idx} className="main__list--listItem">
        <QuoteItem 
        name={quote.character}
        quote={quote.quote} />
      </li>

))

  return (
    <ul className="main__list">
      {htmlQuotes}
    </ul>
  );
}

QuoteList.propTypes = {
  quotes: PropTypes.array,
};
export default QuoteList;
