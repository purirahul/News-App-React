import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


class FirstNews extends Component{
  constructor(){
    super();
    this.state ={
      list: null,
  }

  this.getScience = this.getScience.bind(this);
  this.getBusiness = this.getBusiness.bind(this);
  this.getSports = this.getSports.bind(this);
  this.getHealth = this.getHealth.bind(this);
  this.getEntertainment = this.getEntertainment.bind(this);
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

render(){
  return(
    <div className="container">
      <div className="row mb-3 mt-4">
        <button className="btn btn-primary" onClick={this.getScience} style={{margin:"5px"}}>Science</button>
        <button className="btn btn-primary" onClick={this.getBusiness} style={{margin:"5px"}}>Business</button>
        <button className="btn btn-primary" onClick={this.getSports} style={{margin:"5px"}}>Sports</button>
        <button className="btn btn-primary" onClick={this.getHealth} style={{margin:"5px"}}>Health</button>
        <button className="btn btn-primary" onClick={this.getEntertainment} style={{margin:"5px"}}>Entertainment</button>
      </div>
    <div  style={{textAlign:"left"}}>
    {this.state.list ? this.state.list.map((list, i) =>

      <div className="card bg-light border-light rounded shadow-lg mb-3 " key={i} style={{maxWidth: "100%"}} >
            <div className="row no-gutters">
                  <div className="col-md-4" >
                        <img src={list.image} className="card-img" alt='not available'/>
                  </div>
                  <div className="col-md-8">
                        <div className="card-body ">
                              <h5 className="card-title">{list.title}</h5>
                                  <p className="card-text"><small className="text-muted">{list.source.name}</small></p>
                                  <p className="card-text"><a href={list.url}>{list.description}</a></p>
                                  <p className="card-text"><small className="text-muted">{list.publishedAt}</small></p>
                                  <a href={list.url}><p className="card-text"><small className="text-muted">visit</small></p></a>
                          </div>
                    </div>
                </div>
       </div>
   ) : null }
    </div>
    </div>
)
}
}

export default FirstNews;
