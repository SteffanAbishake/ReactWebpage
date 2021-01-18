import React from 'react'

class Timy extends React.Component{
    constructor(){
        super();
        this.state={time:new Date()}
    }
    updatedate =()=>{
        this.setState({time:new Date()})
    }
    compountWillMount(){
        clearInterval(this.setimerId);
    }

    componentDidMount(){
        this.setiimerId=setInterval(() => 
            this.tick() 
        ,1000);
    }

    tick(){
        this.setState({time:new Date()});
    }
    render(){
        return(
            <div>
                
                <h1>Time is: {this.state.time.toLocaleTimeString()}</h1>
                <button type="button" onClick={this.updatedate}>Update</button>
            </div>
        );
    }
}
export default Timy