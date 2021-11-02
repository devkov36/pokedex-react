import  PropTypes from 'prop-types';
function PokemonAbility(props) {
  return <p className="ability">{props.ability}</p>;
}

PokemonAbility.propTypes = {
  ability: PropTypes.string.isRequired
};
export default PokemonAbility;
