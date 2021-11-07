import  PropTypes from 'prop-types';
function PokemonAbility(props) {
  return (
    <div className="abilities">
      <p className="ability">{props.ability}</p>
    </div>
    );
}

PokemonAbility.propTypes = {
  ability: PropTypes.string.isRequired
};
export default PokemonAbility;
