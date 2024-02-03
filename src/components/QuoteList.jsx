import QuoteItem from "./QuoteItem";

function QuoteList() {
  return (
    <ul className="main__list">
      <li className="main__list--listItem">
        <QuoteItem/>
      </li>
    </ul>
  );
}

export default QuoteList;
