import React from 'react'
import {connect} from 'react-redux'

class SelectedGenre extends React.Component{

  constructor(props){
    super(props)
    this.ifGenre=this.ifGenre.bind(this)
  }

  ifGenre(){
    if (this.props.genre!=="none"){
      return (
        <h3>Selected Genre: {this.props.genre}</h3>
      )
    }
  }

  render(){
    return(
      <div className="selected-genre">
        {this.ifGenre()}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  if (typeof(state.genre)==="object"){
    return {genre:"none"}
  } else {
    return {genre:state.genre}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(SelectedGenre)
