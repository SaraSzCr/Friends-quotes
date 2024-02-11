function Filters({ handleFilterCharacter, handleFilterTitle }) {
  
  
  const handleInputCharacter = (event) => {
    handleFilterCharacter (event.target.value)
  };
  const handleInputTitle = (event) => {
    handleFilterTitle(event.target.value);
  };

  return (
    <form className="main__form">
      <label htmlFor="text">Filtrar por frase</label>
      <input
        className="main__form--filter"
        type="text"
        name="quote"
        id="quote"
        onInput={handleInputTitle}
      />
      <label htmlFor="character">
        Filtrar por personaje
        <select onInput={handleInputCharacter}>
          <option value="all">Todos</option>
          <option value="Monica">Monica</option>
          <option value="Ross">Ross</option>
          <option value="Chandler">Chandler</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Rachel">Rachel</option>
          <option value="Joey">Joey</option>
        </select>
      </label>
    </form>
  );
}

export default Filters;
