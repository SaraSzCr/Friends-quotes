import PropTypes from "prop-types";

function QuoteItem({ name, quote }) {
  return (
    <>
      <p>{quote}</p>
      <h4 className="characterName">{name}</h4>
    </>
  );
}

QuoteItem.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
export default QuoteItem;
