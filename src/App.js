import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Website from './components/Greek.js';
//import Websit from './components/wel'
import Child from './components/pro.js'
import Greetngs from './components/conditional'
import Date from './components/Date.js'
// import { render } from 'react-dom';
//import ReactDom from 'react-dom'
//import image from './dell.png'


function App() {

  return (
    <div className="App">
     
      
      <Child/>
      <Greetngs isLoggedin={false}/>
      <Date/>
     
    </div>
  );
}


export default App;
