import React, { Component } from 'react';
import NewsHeadline from './NewsHeadline';

class NewsList extends Component{
    
    
    
    render(){
        return(
            <div >
                    
                {
                    this.props.news.map((_news)=><NewsHeadline key={_news} _news={_news}/>)
                }
               
            </div>
        );
    }
}
export default NewsList;