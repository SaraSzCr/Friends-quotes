import PropTypes from "prop-types";

function Filters({ handleFilter}) {
  
  
  const handleInputCharacter = (event) => {
    handleFilter ("character", event.currentTarget.value)
  };
  const handleInputQuote = (event) => {
    handleFilter("quote", event.currentTarget.value);
  };

  return (
    <form className="main__form">
      <section className="main__form--filter">
        <label htmlFor="text">Filtrar por frase</label>
        <input
          className="main__form--filter--input"
          type="text"
          name="quote"
          id="quote"
          onInput={handleInputQuote}
        />
      </section>
      <section className="main__form--filter">
        <label htmlFor="character">
          Filtrar por personaje
          <select className="main__form--filter--select" onInput={handleInputCharacter}>
            <option value="all">Todos</option>
            <option value="Monica">Monica</option>
            <option value="Ross">Ross</option>
            <option value="Chandler">Chandler</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Rachel">Rachel</option>
            <option value="Joey">Joey</option>
          </select>
        </label>
      </section>
    </form>

    
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filters;
