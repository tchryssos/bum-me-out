import React from 'react'
import ReactBootstrapSlider from 'react-bootstrap-slider'
import '../styles/bootstrap-slider.css'


class BummerSlider extends React.Component{
  render(){
    return(
      <div>
        <ReactBootstrapSlider
        value={3}
        step={1}
        min={1}
        max={5}/>
      </div>
    )
  }
}

export default BummerSlider
