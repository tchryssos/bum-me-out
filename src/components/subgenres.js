import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class SubGenres extends React.Component{
  constructor(props){
    super(props)
    this.subgenreDisplay=this.subgenreDisplay.bind(this)
    this.setFilters=this.setFilters.bind(this)
  }

  setFilters(e){
    this.props.actions.setFilters(e.target.innerHTML)
  }

  subgenreDisplay(){
    switch(this.props.genre){
      case 'rock':
        return (
          <div className="rock-subgenre-buttons">
            <button onClick={(e)=>this.setFilters(e)}>Post-Rock</button>
            <button onClick={(e)=>this.setFilters(e)}>Indie</button>
            <button onClick={(e)=>this.setFilters(e)}>Classic Rock</button>
          </div>
        )
      case 'jazz':
      return (
        <div className="jazz-subgenre-buttons">
          <button onClick={(e)=>this.setFilters(e)}>Bossa Nova</button>
          <button onClick={(e)=>this.setFilters(e)}>Bebop</button>
          <button onClick={(e)=>this.setFilters(e)}>Cool Jazz</button>
        </div>
      )
      case 'hip-hop':
      return (
        <div className="hip-hop-subgenre-buttons">
          <button onClick={(e)=>this.setFilters(e)}>Jazz Rap</button>
          <button onClick={(e)=>this.setFilters(e)}>Trip-Hop</button>
          <button onClick={(e)=>this.setFilters(e)}>Beats</button>
        </div>
      )
      case 'folk':
      return (
        <div className="folk-subgenre-buttons">
          <button onClick={(e)=>this.setFilters(e)}>Classic Folk</button>
          <button onClick={(e)=>this.setFilters(e)}>Indie</button>
          <button onClick={(e)=>this.setFilters(e)}>Acoustic</button>
        </div>
      )
      case 'electronic':
      return (
        <div className="electronic-subgenre-buttons">
          <button onClick={(e)=>this.setFilters(e)}>Ambient</button>
          <button onClick={(e)=>this.setFilters(e)}>Downtempo</button>
          <button onClick={(e)=>this.setFilters(e)}>Chillwave</button>
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
