import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// sin destructuring
// function Reloj({props}) {
//     return <h3>{props.hora}</h3>
// };

// con destructuring
function Reloj({hora}) {
    return <h3>{hora}</h3>
};


const RelojEffect = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    // hora inicia con la hora local
    const [visible, setVisible] = useState(false);
    // visible inicia en 'false'

    useEffect(() => {
        let temporizador;

        if (visible) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString());
            },
                1000);
        } else {
            clearInterval(temporizador);
        }

        return () => {
            clearInterval(temporizador);
            console.log('useEffect del reloj') // para ver cuando se actua el useEffect
        };
    }, [visible]);
    // estará atento a los cambios en [visible]

    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible ? <Reloj hora={hora}/> : null}
            {/* ternario, si visible es true, ejecuta y sino es 'null' */}
            <button onClick={()=> setVisible(true)}>Iniciar</button>
            <button onClick={()=> setVisible(false)}>Detener</button>
        </>
    )
}

export default RelojEffect;



