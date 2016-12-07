import React from 'react'
import Slider from 'react-slider'
import '../styles/slider.css'

class BummerSlider extends React.Component{
  render(){
    return(
      <div>
      <Slider
      defaultValue={500}
      max={500}
      min={1}
      step={1}
      />
      </div>
    )
  }
}

export default BummerSlider
