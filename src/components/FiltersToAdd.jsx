function FiltersToAdd() {
  return (
    <form className="main__form2">
      <label htmlFor="text">Frase</label>
      <input
        className="main__form--filter"
        type="text"
        name="addQuote"
        id="addQuote"
      />
      <label htmlFor="character">Personaje</label>
      <input type="text" name="addCharacter" id="addCharacter" />
      <button className="main__form2--btn">Añadir nueva frase</button>
    </form>
  );
}

export default FiltersToAdd;
