import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  displayPokemons = () => {
    return this.props.pokemonList.map(pokemon => {
      return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6} pokemon={this.props.pokemon}>
        {this.displayPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
