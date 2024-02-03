function Filters({handleFilterCharacter}) {

  const handleInputCharacter = (event) => {
    console.log(event.target.value)
    handleFilterCharacter(event.target.value)

  }

  return (
    <form className="main__form">
    <label htmlFor="text">Filtrar por frase</label>
    <input
      className="main__form--filter"
      type="text"
      name="text"
      placeholder=""
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