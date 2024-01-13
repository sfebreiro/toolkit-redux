import React, {Fragment, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

  const {page, pokemons, isLoading} = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(0));
  }, [])
  
  return (
    <Fragment>
        <h1>Pokemon</h1>
        <hr/>
        <span>Loading: {isLoading ? 'True' : 'False'}</span>
        <ul>
            {
              pokemons.map(({name}) => (  // También se puede desestructurar en el map
                <li key={name}>{name}</li>
              ))
            }
        </ul>
        <button
          disabled={isLoading}
          onClick={() => dispatch(getPokemons(page))}
        >
          Next
        </button>
    </Fragment>
  )
}
