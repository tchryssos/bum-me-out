import React from 'react'
import {connect} from 'react-redux'

class SadnessDisplay extends React.Component{
  constructor(props){
    super()
  }

  render(){
    return(
      <div>
        <h1> {this.props.sadness}</h1>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps){
  return {sadness: state.sadness}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(SadnessDisplay)
