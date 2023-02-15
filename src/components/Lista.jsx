import React from "react";
import { useState } from "react";

function List() {
    const [list, setList] = useState(()=>[
        { id: 1, title: "Lista en Estado 1" },
        { id: 2, title: "Lista en Estado 2" },
        { id: 3, title: "Lista en Estado 3" }

    ]);

    const add = ()=> setList([...list,{id:[list.length +1],title: `Lista en Estado ${list.length + 1}`}])

    const remove = ()=> setList(list.slice(0,-1));

    const logear = ()=> console.log(list.length);

    return (
        <div>

            {list.map(el=>
                
            <p key={el.id}>{el.title}</p>
                
                )}

                <button onClick={add} title="Agrega un objeto al final.">Agregar</button>
                <button onClick={remove} title="Elimina el último objeto de la lista.">Eliminar</button>
                <button onClick={logear} title="Muestra largo de la lista en consola.">Log</button>


        </div>
    )
}

export default List;