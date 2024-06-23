import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Strip extends Component {
  render() {
 
    return (
      <div style={{backgroundColor:"#cef1f9", display:"flex",justifyContent:"space-evenly"}}>
     <Link className="btn" to="/"></Link>
     <Link className="btn" to="/"></Link>
     <Link className="btn" to="/"></Link>
     <Link className="btn" to="/"></Link>
      </div>
    )
  }
}
