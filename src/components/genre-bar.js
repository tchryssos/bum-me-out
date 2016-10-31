import React from 'react'

class GenreBar extends React.Component{
  constructor(props){
    super(props)
    this.showSubGenres=this.showSubGenres.bind(this)
  }

  showSubGenres(e){
    console.log(e.target.className.split("-").slice(0,e.target.className.split("-").length-1).join("-"))
  }

  render(){
    return(
      <div className="genre-bar">
      <h2>Choose a Genre</h2>
        <ul className="genre-buttons">
          <li><button className="rock-button" onClick={(e)=>{this.showSubGenres(e)}}>Rock</button></li>
          <li><button className="hip-hop-button" onClick={(e)=>{this.showSubGenres(e)}}>Hip-Hop</button></li>
          <li><button className="electronic-button" onClick={(e)=>{this.showSubGenres(e)}}>Electronic</button></li>
          <li><button className="folk-button" onClick={(e)=>{this.showSubGenres(e)}}>Folk</button></li>
          <li><button className="jazz-button" onClick={(e)=>{this.showSubGenres(e)}}>Jazz</button></li>
        </ul>
      </div>
    )
  }
}

export default GenreBar
