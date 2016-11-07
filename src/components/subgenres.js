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
        return "ROCK"
      case 'jazz':
        return "JAZZ"
      case 'hip-hop':
        return "HIP-HOP"
      case 'folk':
        return "FOLK"
      case 'electronic':
        return "ELECTRONIC"
      default:
        break
    }
  }

  render(){
    return(
      <h1>{this.subgenreDisplay()}</h1>
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
