import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    hover: false
  }

  clickHandle = () => {
    this.setState({
      hover: !this.state.hover 
    })
  }

  getHp = () => {
   return this.props.pokemon.stats.find(stat => stat.name === "hp")
  }

  
  render() {
    let {pokemon} = this.props
    return (
      <Card onClick={this.clickHandle}>
        <div>
          <div className="image" >
            <img src={this.state.hover ? pokemon.sprites.back : pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp().value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
