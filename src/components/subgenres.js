import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class SubGenres extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <h1>SUBGENRES</h1>
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
