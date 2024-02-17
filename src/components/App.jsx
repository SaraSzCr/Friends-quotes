import "../scss/App.scss";
import { useState } from "react";
import Filters from "./Filters";
import QuoteList from "./QuoteList";
import DataQuotes from "../data/quotes.json";
import FiltersToAdd from "./FiltersToAdd";

function App() {
  const [quotes, setQuotes] = useState(DataQuotes);

  const [filterCharacter, setFilterCharacter] = useState("all");
  const [filterQuote, setFilterQuote] = useState("");

  const [addText, setAddText] = useState("");
  const [addCharacter, setAddCharacter] = useState("");

  const handleFilter = (filterText, filterValue) => {
    console.log(filterText);


    if (filterText === "quote") {
      setFilterQuote(filterValue);
    } else if (filterText === "character") {
      setFilterCharacter(filterValue);
    }
  };

  const handleAdd = (textValue, nameValue) => {
    console.log(textValue, nameValue)

    if (textValue ===  "text"){
      setAddText (textValue);
    } else if (nameValue === "name"){
      setAddCharacter(nameValue);
    }
  }

  const handleClick = () => {

    const newObj = {
      "quote": addText,
      "character": addCharacter
      };

    setQuotes( [...quotes, newObj]  );

  }

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
        <FiltersToAdd handleClick={handleClick} addText={addText} addCharacter={addCharacter} handleAdd={handleAdd}/>
      </main>
    </div>
  );
}

export default App;
