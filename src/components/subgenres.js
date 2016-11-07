import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class SubGenres extends React.Component{
  constructor(props){
    super(props)
    this.subgenreDisplay=this.subgenreDisplay.bind(this)
  }

  subgenreDisplay(){
    switch(this.props.genre){
      case 'rock':
        return (
          <div className="rock-subgenre-buttons">
            <button>Post-Rock</button>
            <button>Indie</button>
            <button>Classic Rock</button>
          </div>
        )
      case 'jazz':
      return (
        <div className="jazz-subgenre-buttons">
          <button>Bossa Nova</button>
          <button>Bebop</button>
          <button>Cool Jazz</button>
        </div>
      )
      case 'hip-hop':
      return (
        <div className="hip-hop-subgenre-buttons">
          <button>Jazz Rap</button>
          <button>Trip-Hop</button>
          <button>Beats</button>
        </div>
      )
      case 'folk':
      return (
        <div className="folk-subgenre-buttons">
          <button>Classic Folk</button>
          <button>Indie</button>
          <button>Acoustic</button>
        </div>
      )
      case 'electronic':
      return (
        <div className="electronic-subgenre-buttons">
          <button>Ambient</button>
          <button>Downtempo</button>
          <button>Chillwave</button>
        </div>
      )
      default:
        break
    }
  }

  render(){
    return(
      <div className="subgenre-display">
      {this.subgenreDisplay()}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
    return {genre:state.genre}
}

function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(actions,dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(SubGenres)
