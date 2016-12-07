import React from 'react'
import {Link} from 'react-router'

export default function Header(props){
  return(
    <div className="header">
      <Link to="/"><h1> BUM ME OUT </h1></Link>
      <p>Choose your desired Sadness Level with the slider below. A song will appear to depress you appropriately.</p>
    </div>
  )
}
