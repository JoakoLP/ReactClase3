import React from "react";
import { useState } from "react";

function Counter(){
    
    const [counter,setCounter] = useState(0);

    const sum = () => setCounter(counter + 1);
    const res = () => setCounter(counter - 1);
    const mul2 = () => setCounter(counter * 2);
    const mul3 = () => setCounter(counter * 3);
    const mul4 = () => setCounter(counter * 4);
    const div2 = () => setCounter(counter / 2);
    const div3 = () => setCounter(counter / 3);
    const div4 = () => setCounter(counter / 4);
    const nPrim = () => {
        if (counter <= 2) return console.log(`${counter} no es número primo.`)
        for(let x=2; x <= counter/2; x++){
            if (counter % x == 0) return console.log(`${counter} no es número primo.`) 
        }
        return console.log(`${counter} es número primo.`);
    }
    const reset = () =>{setCounter(0)}
    
    return(
        <div>
                <h3>{counter}</h3>  
                <button onClick={res} title="Restar 1">Restar</button>
                <button onClick={sum} title="Sumar 1">Sumar</button>
                <button onClick={mul2} title="Multiplicar por 2">x*2</button>
                <button onClick={mul3} title="Multiplicar por 3">x*3</button>
                <button onClick={mul4} title="Multiplicar por 4">x*4</button>
                <button onClick={div2} title="Dividir por 2">x/2</button>
                <button onClick={div3} title="Dividir por 3">x/3</button>
                <button onClick={div4} title="Dividir por 4">x/4</button>
                <button onClick={nPrim} title="Muestra en consola si es número primo.">Número Primo</button>
                <button onClick={reset} title="Reinicia el contador">Reiniciar</button>

        </div>
    )
}

export default Counter;