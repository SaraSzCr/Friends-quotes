import PropTypes from "prop-types";

function FiltersToAdd({ addText, setAddText }) {
  
  const handleInputAddText = (event) => {
    setAddText(event.currentTarget.value);
  };

  const handleInputAddCharacter = (event) => {
    setAddText (event.currentTarget.value)
  }
  return (
    <form className="main__form2">
      <label htmlFor="text">Frase</label>
      <input
        className="main__form--filter"
        type="text"
        name="addQuote"
        id="addQuote"
        value={addText}
        onChange={handleInputAddText}
      />
      <label htmlFor="character">Personaje</label>
      <input
        type="text"
        name="addCharacter"
        id="addCharacter"
        value={addText}
        onChange={handleInputAddCharacter}
      />
      <button className="main__form2--btn">Añadir nueva frase</button>
    </form>
  );
}

FiltersToAdd.propTypes = {
  addText: PropTypes.string,
  setAddText: PropTypes.func.isRequired,
};
export default FiltersToAdd;
