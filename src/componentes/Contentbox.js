import React, { Component } from 'react'
import Newspacket from './Newspacket'
import Spinner from './Spinner';

export default class Contentbox extends Component {
    constructor(){
        super();
        this.state={
          articles: [],
          n:1,
          loading: false
        }
    }
   
    fatchdata=async()=>{
      let URl=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=e4717b2210684b139381b97e2f3516f6&page=${this.state.n}&pageSize=${this.props.size}`
      this.setState({loading:true})
      let responce= await fetch(URl)
      let data=await responce.json()
       this.setState({loading:false})
      let articles=data.articles
      this.setState({articles:articles , totalResults:data.totalResults})
    }

    async componentDidMount(){
      
        this.fatchdata()
       
    }
    HandleNext=async()=>{
        if(!((this.state.n+1)>Math.ceil(this.state.totalResults/this.props.size))){

          
           
           this.setState({ n: this.state.n + 1 },()=>{this.fatchdata()})
           
        }
    }
    HandlePrevious=async()=>{
       
        this.setState({ n: this.state.n - 1 },()=>{this.fatchdata()})
    }
  render() {
   
    return (
        <div className="container my-3 pt-4 " style={{backgroundColor:"#ddefff",minHeight:"90vh"}}>
            <h1 style={{textAlign:'center'}}>{this.props.typeof} News</h1>
           {this.state.loading && <Spinner></Spinner>}
  <div className="row">
    
    {this.state.articles.map((element)=>{
return (

    <div className=' col-md-4 my-3 ' >
        <Newspacket img={element.urlToImage} title={element.title} description={element.description} more={element.url} author={element.author} date={element.publishedAt} credit={element.source.name}></Newspacket>
      </div>
    )
    })}
     
      
    
  </div>
  <div className="d-flex justify-content-between" >
    <button disabled={this.state.n<=1} className="btn btn-primary" onClick={this.HandlePrevious}>previous</button>
    <button disabled={this.state.n+1>Math.ceil(this.state.totalResults/this.props.size)} className="btn btn-primary" onClick={this.HandleNext}>next</button>
  </div>
        </div>
    )
  }
}

