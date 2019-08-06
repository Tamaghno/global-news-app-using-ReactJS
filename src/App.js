import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './CountryList';
import NewsList from './NewsList';

//<div>{this.state.loading && <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>}</div> 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={news:[],loading:false,time: new Date().toLocaleTimeString()};
}
addtonews=(country)=>
{
  
  this.setState({loading:true});
  
                
  fetch(`https://newsapi.org/v2/top-headlines?source=google-news&country=${country}&apiKey=6289893ecdef4daea456948ce2791e3b`).
  then((Response)=>{return Response.json()}).then((json)=>{this.setState({news:json.articles,loading:false},()=>{console.log(json.articles)})});

}

componentDidMount() {
        
  setInterval(() => this.setState({
  time: new Date().toLocaleTimeString()
}),1000);}



  render() {
    return (
      <div className="container">
      
     
      
        <div className="box">
          <p>
          
        <img src={logo} height="300" width="150" className="App-logo" alt="logo" />
          </p>
        
          <h2>Made in React JS</h2>
          <small>Made with ♥ by <a href="https://github.com/tamaghno" target="_blank">Tamaghno Chaudhuri</a></small>
         <br />
          <small>The time is {this.state.time}</small>
          <h1>SELECT A COUNTRY TO READ ITS TOP NEWS HEADLINES</h1>
        </div>
         
        
      <CountryList loading={this.state.loading} addnews={this.addtonews}/>
      {this.state.loading&&<img src="https://camo.githubusercontent.com/9be29021cfdb21b2cc257a3efcb269f64d42f5b6/687474703a2f2f32352e6d656469612e74756d626c722e636f6d2f63393961353739646233616530666331363462663463636131343838383564332f74756d626c725f6d6a6776386b45754d67317338376e37396f315f3430302e676966"/>}
     {!this.state.loading && <NewsList loading={this.state.loading} news={this.state.news}/>}
      

      </div>
    );
  }
}


export default App;
