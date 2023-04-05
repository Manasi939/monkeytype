import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title ,desc, imagee,url,date}= this.props;
    return (
    
      <div >
        <div className="card " style={{width: "18rem"}}>
  <img className="card-img-top" src={imagee} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{desc}...</p>
    <p>{new Date(date).toGMTString()}</p>
    <a href={url} target="_blank" className="btn btn-sm btn-primary">Go somewhere</a>
     
  </div>
     </div>
      </div>
    )
  }
}

export default Newsitem
