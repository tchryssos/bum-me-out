import React from 'react'
import Slider from 'react-slider'
import '../styles/slider.css'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class BummerSlider extends React.Component{
  constructor(){
    super()
    this.onSliderChange=this.onSliderChange.bind(this)
  }

  onSliderChange(value){
    console.log(value)
  }

  render(){
    return(
      <div className='slider-div'>
      <Slider
      defaultValue={500}
      max={500}
      min={1}
      step={1}
      onChange={this.onSliderChange}
      />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(BummerSlider)
