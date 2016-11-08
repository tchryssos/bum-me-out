import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class SubgenreFilters extends React.Component{
  constructor(props){
    super(props)
    // this.filteredSubgenres=this.filteredSubgenres.bind(this)
  }

  // filteredSubgenres(){
  //   if (this.props.subgenres.length===0){
  //     return "none"
  //   } else {
  //     return this.props.subgenres.join(", ")
  //   }
  //
  // }

  render(){
    return(
      <h4>Filters: {this.props.subgenres}</h4>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {subgenres:state.subgenres}
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(actions,dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(SubgenreFilters)
