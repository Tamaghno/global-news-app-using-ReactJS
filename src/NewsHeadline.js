import React, { Component } from 'react';


class NewsHeadline extends Component{
    render(){
        return(
           
                <div>

                
                <div className="box">

                <div style={{display:"flex",flexDirection:"row",marginLeft:"10px"}}><img src={this.props._news.urlToImage} width="180" height="120"/>
               
                <div style={{marginLeft:"10px"}}>{this.props._news.description}</div>
                
                   <p>
                   <br />
                   <br />
                   <small><a href={this.props._news.url}>For More Information</a></small>
                   </p>
                

                </div>
                </div>
                </div>
              
            
        );
    }
}
export default NewsHeadline;