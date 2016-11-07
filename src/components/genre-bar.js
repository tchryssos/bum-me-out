import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class GenreBar extends React.Component{
  constructor(props){
    super(props)
    this.setGenre=this.setGenre.bind(this)
  }

  setGenre(e){
    let genre=e.target.className.split("-").slice(0,e.target.className.split("-").length-1).join("-")
    this.props.actions.setGenre(genre)
  }

  render(){
    return(
      <div className="genre-bar">
      <h2>Choose a Genre</h2>
        <ul className="genre-buttons">
          <li><button className="rock-button" onClick={(e)=>{this.setGenre(e)}}>Rock</button></li>
          <li><button className="hip-hop-button" onClick={(e)=>{this.setGenre(e)}}>Hip-Hop</button></li>
          <li><button className="electronic-button" onClick={(e)=>{this.setGenre(e)}}>Electronic</button></li>
          <li><button className="folk-button" onClick={(e)=>{this.setGenre(e)}}>Folk</button></li>
          <li><button className="jazz-button" onClick={(e)=>{this.setGenre(e)}}>Jazz</button></li>
        </ul>
        <selectedGenre/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(actions,dispatch)}
}

function mapStateToProps(state, ownProps){
  return {genre: state.genre}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(GenreBar)
