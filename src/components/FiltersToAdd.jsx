import PropTypes from "prop-types";

function FiltersToAdd({
  addText,
  setAddText,
  addCharacter,
  setAddCharacter,
  handleClick,
}) {
  const handleInputAddText = (event) => {
    setAddText(event.currentTarget.value);
  };

  const handleInputAddCharacter = (event) => {
    setAddCharacter(event.currentTarget.value);
  };
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
        value={addCharacter}
        onChange={handleInputAddCharacter}
      />
      <input
        onClick={handleClick}
        className="main__form2--btn"
        type="submit"
        value="Añadir nueva frase "
      />
    </form>
  );
}

FiltersToAdd.propTypes = {
  addText: PropTypes.string,
  setAddText: PropTypes.func.isRequired,
  addCharacter: PropTypes.string,
  setAddCharacter: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default FiltersToAdd;
