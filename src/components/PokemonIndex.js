import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state ={
    pokemon: [],
    foundPokemonList: []
  }

  fetchPokemon = () => {
    fetch(URL)
      .then(r => r.json())
      .then(pokemons => {
        this.setState({
          pokemon: pokemons,
          foundPokemonList: pokemons
        })
      })
  }

  componentDidMount() {
     this.fetchPokemon()

  }

  updatePokemon = (newPokemon) => {
    this.setState({
      pokemon: [...this.state.pokemon, newPokemon]
    })
  }

  handleSearch = (event) => {
    this.setState({
      pokemon: this.state.foundPokemonList.filter(poke => poke.name.toLowerCase().includes(event.target.value.toLowerCase()))
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonCollection pokemonList={this.state.pokemon}/>
        <br />
        <PokemonForm fetchPokemon={this.fetchPokemon} updatePokemon={this.updatePokemon}/>
      </div>
    )
  }
}

export default PokemonPage
