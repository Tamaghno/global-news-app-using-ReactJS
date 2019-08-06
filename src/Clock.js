export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleTimeString()
      };
      
    }
    componentDidMount() {
      
        setInterval(() => this.setState({
        time: new Date().toLocaleTimeString()
      }),1000);
      
      //const{time}=this.state;
    }
  
  
    render() {
      return (
         <h1> 
          The time is {this.state.time}
          
          </h1>
      );
    }
  }
