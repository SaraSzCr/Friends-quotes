import QuoteItem from "./QuoteItem";

function QuoteList() {
  return (
    <ul className="main__list">
      <li className="main__list--listItem">
        <QuoteItem name="Ross" quote="Pivot! Pivot! Pivot! Pivot! Pivot!" />
      </li>
    </ul>
  );
}

export default QuoteList;
