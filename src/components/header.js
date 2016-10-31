import React from 'react'
import {Link} from 'react-router'

export default function Header(props){
  return(
    <div className="header">
      <Link to="/"><h1> BUM ME OUT </h1></Link>
    </div>
  )
}
