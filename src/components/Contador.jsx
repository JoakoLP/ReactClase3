import React from "react";
import { useState } from "react";

function Counter(){
    
    const [counter,setCounter] = useState(0);

    const sum = () => setCounter(counter + 1);
    const res = () => setCounter(counter - 1);

    
    return(
        <div>
                <h3>{counter}</h3>  
                <button onClick={res}>Restar</button>
                <button onClick={sum}>Sumar</button>
        </div>
    )
}

export default Counter;