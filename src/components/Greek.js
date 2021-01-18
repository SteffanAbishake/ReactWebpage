
import React from 'react';
//import ReactDom from 'react-dom'


class Website extends React.Component
{
  constructor()
{
  super();
      this.state={message:("Would you like to unlock")}
}
componentWillMount(){
  alert("would you like to continu");
}
render(){
   return( 
          <h1>{this.state.message}</h1>
  
   );
}
componentDidMount(){
  setTimeout( ()=>{
    alert("Your account hackked!!!!!")
    this.setState({message:"If you dont like pless press the button "})
 
  
  },5000)
}
}
export default Website;
