function Filters({ handleFilterCharacter, handleFilterTitle }) {
  const handleInputCharacter = (event) => {
    handleFilterCharacter(event.target.value);
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
        name="text"
        placeholder=""
        onInput={handleInputTitle}
      />
      <label htmlFor="text">Filtrar por personaje</label>
      <input
        className="main__form--filter"
        type="text"
        name="text"
        placeholder="Todos"
        onInput={handleInputCharacter}
      />
    </form>
  );
}

export default Filters;
