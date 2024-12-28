import React from "react";

function Header(){
    let greet;
    let curTime = new Date().getHours()

    if(curTime<12)
        greet="Good Morning"
    else if(curTime<18)
        greet="Good Afternoon"
    else
        greet="Good Evening"


    return(
        <>
        <h3 className="greetings" style={{color:"#1a1a1a"}}>{greet} Yashwanth</h3>
        <header>
            
            <h1>Keeper</h1>
        </header>
        </>
    );
}

export default Header; 
