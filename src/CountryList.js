import React, { Component } from 'react';
import './buttons.css';

class CountryList extends Component{
    
   
    render(){
        return(
            <div >
        

                <button class="button" onClick={()=>this.props.addnews("in")}>India</button>
                
                <button class="button" onClick={()=>this.props.addnews("us")}>United States of America</button>
                <button class="button" onClick={()=>this.props.addnews("ru")}>Russia</button>
                <button class="button" onClick={()=>this.props.addnews("gb")}>Great Britain</button>
                <button class="button" onClick={()=>this.props.addnews("ca")}>Canada</button>
                <button class="button" onClick={()=>this.props.addnews("aus")}>Australia</button>

               

            </div>
        );
    }
}
export default CountryList;