import React from 'react'
import Slider from 'react-slider'
import '../styles/slider.css'

class BummerSlider extends React.Component{
  render(){
    return(
      <div>
      <Slider
      defaultValue={5}
      max={10}
      min={0}
      step={1}
      />
      </div>
    )
  }
}

export default BummerSlider
