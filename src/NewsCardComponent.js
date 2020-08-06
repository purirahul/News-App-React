import React, {Component} from 'react';



class NewsCardComponent extends Component{

    constructor(props){
      super(props);
    }

    render(){
      return(
      <div className="card bg-light border-light rounded shadow-lg mb-4 animate__animated animate__zoomIn " style={{maxWidth: "100%"}} >
          <div className="row no-gutters">
              <div className="col-md-4" >
                    <img src={this.props.list.image} className="card-img" alt='not available'/>
              </div>

              <div className="col-md-8">
                  <div className="card-body ">
                        <h5 className="card-title">{this.props.list.title}</h5>
                            <p className="card-text"><small className="text-muted">{this.props.list.source.name}</small></p>
                            <p className="card-text"><a href={this.props.list.url}>{this.props.list.description}</a></p>
                            <p className="card-text"><small className="text-muted">{this.props.list.publishedAt}</small></p>
                            <a href={this.props.list.url}><p className="card-text" style={{textAlign: "right", rightMargin: "20px" }}>visit</p></a>
                    </div>
              </div>
          </div>
    </div>
)
}
}

export default NewsCardComponent;
