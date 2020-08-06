import React, {Component} from 'react';
import axios from 'axios';
import "./App.css";
import NewsCardComponent from "./NewsCardComponent.js"


class FirstNews extends Component{
  constructor(){
    super();
    this.state ={
      list: null,
      inputValue: null
  }

  this.getScience = this.getScience.bind(this);
  this.getBusiness = this.getBusiness.bind(this);
  this.getSports = this.getSports.bind(this);
  this.getHealth = this.getHealth.bind(this);
  this.getEntertainment = this.getEntertainment.bind(this);
  this.inputChanged = this.inputChanged.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
};


  componentDidMount(){
    axios.get('https://gnews.io/api/v3/search?q=india&image=required&token=0e5ea080bb48fc6a975fba5874967685').then(res =>{
      console.log(res);
      this.setState({list: res.data.articles});
    });
  }


  getScience(){
    axios.get('https://gnews.io/api/v3/topics/science?country=in&token=0e5ea080bb48fc6a975fba5874967685').then(res =>{
      this.setState({list: res.data.articles});
    });
  }


  getBusiness(){
    axios.get('https://gnews.io/api/v3/topics/business?country=in&token=0e5ea080bb48fc6a975fba5874967685').then(res =>{
      this.setState({list: res.data.articles});
    });
  }

  getSports(){
    axios.get('https://gnews.io/api/v3/topics/sports?country=in&token=0e5ea080bb48fc6a975fba5874967685').then(res =>{
      this.setState({list: res.data.articles});
    });
  }

  getHealth(){
    axios.get('https://gnews.io/api/v3/topics/health?country=in&token=0e5ea080bb48fc6a975fba5874967685').then(res =>{
      this.setState({list: res.data.articles});
    });
  }

  getEntertainment(){
    axios.get('https://gnews.io/api/v3/topics/entertainment?country=in&token=0e5ea080bb48fc6a975fba5874967685').then(res =>{
      this.setState({list: res.data.articles});
    });
  }

  inputChanged(e){

    this.setState({inputValue: e.target.value});
  }

  handleSubmit(e){
    axios.get('https://gnews.io/api/v3/search?q=' + this.state.inputValue + '&image=required&token=0e5ea080bb48fc6a975fba5874967685').then(res=>{
      this.setState({list: res.data.articles});
    })
    e.preventDefault()
  }

render(){
  return(
    <div className="container">

      <center className="mt-5 animate__animated animate__wobble animate__delay-2s"><h1 style={{fontFamily: "stencil", color:"#ff0000"}}> Way 2 Be Up To Date</h1></center>
      <form onSubmit={this.handleSubmit} style={{maxWidth:"100%"}} className="mt-5">

          <input className="form-control" placeholder="Search for any other Topic" type="text"  value={this.state.inputValue} onChange={this.inputChanged}/>
      </form>

      <div className="row no-gutters mb-5 mt-4">
        <button className="btn btn-primary " onClick={this.getScience} style={{margin:"8px"}}>Science</button>
        <button className="btn btn-primary " onClick={this.getBusiness} style={{margin:"8px"}}>Business</button>
        <button className="btn btn-primary" onClick={this.getSports} style={{margin:"8px"}}>Sports</button>
        <button className="btn btn-primary" onClick={this.getHealth} style={{margin:"8px"}}>Health</button>
        <button className="btn btn-primary" onClick={this.getEntertainment} style={{margin:"8px"}}>Entertainment</button>
      </div>
    <div  style={{textAlign:"left"}}>
    {this.state.list ? this.state.list.map((list, i) =>
          <NewsCardComponent list={list} key={i} />
         ) : null }
    </div>
    </div>
)
}
}

export default FirstNews;
