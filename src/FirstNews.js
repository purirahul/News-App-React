import React, {Component} from 'react';
import axios from 'axios';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


class FirstNews extends Component{

    state ={
      list: null,
  };


  componentDidMount(){
    axios.get('https://gnews.io/api/v3/search?q=india&image=required&token=0e5ea080bb48fc6a975fba5874967685').then(res =>{
      console.log(res);
      this.setState({list: res.data.articles});
    });
  }

render(){
  return(
    <div>
    <div className="NewsContainer" style={{textAlign:"left"}}>
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
