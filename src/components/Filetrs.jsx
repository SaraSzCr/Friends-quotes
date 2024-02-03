function Filters() {

  return (
    <form className="main__form">
    <label htmlFor="text">Filtrar por frase</label>
    <input
      className="main__form--filter"
      type="text"
      name="text"
      id="text"
      placeholder=""
    />
    <label htmlFor="text">Filtrar por personaje</label>
    <input
      className="main__form--filter"
      type="text"
      name="text"
      id="text"
      placeholder="Todos"
    />
  </form>
  );
}

export default Filters;