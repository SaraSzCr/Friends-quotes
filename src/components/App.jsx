import "../scss/App.scss";
import { useState } from "react";
import Filters from "./Filters";
import QuoteList from "./QuoteList";
import DataQuotes from "../data/quotes.json";
import FiltersToAdd from "./FiltersToAdd";

function App() {
  const [quotes] = useState(DataQuotes);

  const [filterCharacter, setFilterCharacter] = useState("all");
  const [filterQuote, setFilterQuote] = useState("");

  const [addText, setAddText] = useState("");

  const handleFilter = (filterText, filterValue) => {
    console.log(filterText);

    if (filterText === "quote") {
      setFilterQuote(filterValue);
    } else if (filterText === "character") {
      setFilterCharacter(filterValue);
    }
  };

  const filterAll = quotes
    .filter((quote) => quote.quote.includes(filterQuote))
    .filter((quote) => {
      if (filterCharacter === "all") {
        return true;
      } else {
        return quote.character === filterCharacter;
      }
    });

  return (
    <div>
      <header className="title">
        <h1>Frases de Friends</h1>
      </header>
      <main className="main">
        <Filters handleFilter={handleFilter} />
        <QuoteList quotes={filterAll} />
        <section className="title">
          <h3>Añadir una nueva frase</h3>
        </section>
        <FiltersToAdd addText={addText} setAddText={setAddText}/>
      </main>
    </div>
  );
}

export default App;
