import React, { Component } from 'react'

export default class Newspacket extends Component {
  render() {
    let {author}=this.props
    return (
      <div>
        
        <div className="card"  >
  <img src={this.props.img?this.props.img:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(this.props.date).toGMTString()}</small></p>
    <a href={this.props.more} className="btn btn-primary">More</a>
  </div>
  <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{left:"30px",zIndex:"1"}}>
    {this.props.credit}
  </span>
</div>
      </div>
    )
  }
}
