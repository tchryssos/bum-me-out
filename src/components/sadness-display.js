import React from 'react'
import {connect} from 'react-redux'

class SadnessDisplay extends React.Component{

  render(){
    return(
      <div>
        <h1> {this.props.sadness}</h1>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps){
  if (state.sadness < 101){
    return {sadness: 'Gloomy'}
  } else if (state.sadness >= 101 && state.sadness < 201){
    return {sadness: 'Melancholy'}
  } else if (state.sadness >= 201 && state.sadness < 301){
    return {sadness: 'Forlorn'}
  } else if (state.sadness >= 301 && state.sadness < 401){
    return {sadness: 'Miserable'}
  } else {
    return {sadness: 'Depressed'}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(SadnessDisplay)
