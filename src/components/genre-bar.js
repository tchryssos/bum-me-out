import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SelectedGenre from './selected-genre'
import SubGenres from './subgenres'
import SubgenreFilters from "./subgenre-filters"

class GenreBar extends React.Component{
  constructor(props){
    super(props)
    this.setGenre=this.setGenre.bind(this)
    this.clearFilters=this.clearFilters.bind(this)
    this.buttonClickActions=this.buttonClickActions.bind(this)
  }

  setGenre(e){
    let genre=e.target.className.split("-").slice(0,e.target.className.split("-").length-1).join("-")
    this.props.actions.setGenre(genre)
  }

  clearFilters(){
    this.props.actions.clearFilters()
  }

  buttonClickActions(e){
    this.setGenre(e)
    this.clearFilters()
  }

  render(){
    return(
      <div className="genre-bar">
      <h2>Choose a Genre</h2>
        <ul className="genre-buttons">
          <li><button className="rock-button" onClick={(e)=>{this.buttonClickActions(e)}}>Rock</button></li>
          <li><button className="hip-hop-button" onClick={(e)=>{this.buttonClickActions(e)}}>Hip-Hop</button></li>
          <li><button className="electronic-button" onClick={(e)=>{this.buttonClickActions(e)}}>Electronic</button></li>
          <li><button className="folk-button" onClick={(e)=>{this.buttonClickActions(e)}}>Folk</button></li>
          <li><button className="jazz-button" onClick={(e)=>{this.buttonClickActions(e)}}>Jazz</button></li>
        </ul>
        <SubGenres/>
        <SelectedGenre/>
        <SubgenreFilters/>
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
