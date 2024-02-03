import "../scss/App.scss";
import Filters from "./Filetrs";
import QuoteList from "./QuoteList";
import DataQuotes from "../data/quotes.json";

function App() {

  
  return (
    <div>
      <header className="title">
        <h2>Frases de Friends</h2>
      </header>
      <main className="main">
       <Filters/>
        <QuoteList/>
      </main>
    </div>
  );
}

export default App;
