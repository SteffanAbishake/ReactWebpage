import React from 'react';
import ReactDom  from 'react-dom'
import Website from './components/Greek.js'
import Web from './components/Hello.js';


class Websit extends React.Component
{
  render()
    {
      return <h1> HEllo Steffan Abishake</h1>
    }
}

class Second extends React.Component
{
  render()
  {
    return 
    <div>
      
      <Websit/>
      <h2>Super</h2> 
      </div>
  }
}



export default Second