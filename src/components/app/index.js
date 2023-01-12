import React from "react";
import Main from '../main';


import './app.css';


const App = () => {
    const taskArr = ['First', 'Second', 'Third']; 
    return (
        <div className="container_div">
             <Main taskArr={taskArr}> </Main>
             

        </div>
    )  
}



export default App;
