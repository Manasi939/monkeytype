import React, { Component } from 'react'
import loadingg from "../loadingg.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div>
         <img src={loadingg } height="20" width="20" alt="imagee"></img>
      </div>
    )
  }
}
