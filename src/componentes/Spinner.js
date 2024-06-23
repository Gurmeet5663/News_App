import React, { Component } from 'react'
import spinnertransparent from "../spinnertransparent.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'style={{scale:".5"}}>
        <img src={spinnertransparent} alt="spinnertransparent" />
      </div>
    )
  }
}
