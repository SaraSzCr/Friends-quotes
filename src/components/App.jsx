import "../scss/App.scss";
import Filters from "./Filetrs";
import QuoteList from "./QuoteList";
import DataQuotes from "../data/quotes.json";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState (DataQuotes);
console.log(quotes);

  return (
    <div>
      <header className="title">
        <h2>Frases de Friends</h2>
      </header>
      <main className="main">
       <Filters/>
        <QuoteList quotes = {quotes}/>
      </main>
    </div>
  );
}

export default App;
