import React from 'react';

function UserGreetings(props){
    return <h1>Welcome</h1>
}

function GuestGreetings(props){
    return <h1>Please Log in</h1>
}

function Greetings(props){
    const isLoggedin= props.isLoggedin;
    if(isLoggedin){
        return <UserGreetings/>
    }
        return <GuestGreetings/>
}
export default Greetings;

/*
 make code in App.js 
 <Greetings={false}/>;
 // so its first find in whats in isLoggedin then if user not logged in its display GuestGreetings 
 */

