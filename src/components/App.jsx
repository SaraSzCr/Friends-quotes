import "../scss/App.scss";
import Filters from "./Filetrs";
import QuoteList from "./QuoteList";
import DataQuotes from "../data/quotes.json";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState (DataQuotes);

  const [filterCharacter, setFilterCharacter] = useState ("");

const handleFilterCharacter = (filterValue) => {
  setFilterCharacter(filterValue);
}

const [filterTitle, setFilterTitle]= useState ("");
const handleFilterTitle =(filterTitle) => {
  setFilterTitle(filterTitle);
}

const filteredCharacter = quotes.filter (quote => quote.character.toLowerCase().includes (filterCharacter));

const filteredTitle = quotes.filter (quote => quote.character.toLowerCase().includes (filterTitle));

  return (
    <div>
      <header className="title">
        <h2>Frases de Friends</h2>
      </header>
      <main className="main">
       <Filters handleFilterCharacter={handleFilterCharacter} handleFilterTitle={handleFilterTitle}/>
        <QuoteList quotes = {filteredCharacter}/>
      </main>
    </div>
  );
}

export default App;
