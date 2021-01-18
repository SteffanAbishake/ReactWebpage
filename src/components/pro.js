import React from 'react';

class Parent  extends React.Component{
  render()
  {
    return (
      <div>
        <p>Learn {this.props.medium}</p>
      </div> 
    )
  }
}
    


class Child extends React.Component{
  render()
  {
    const x="tamil";
    return(
      <div>
        <p><Parent medium={x}/></p>
         
      </div>
    )
  }
}
export default Child 