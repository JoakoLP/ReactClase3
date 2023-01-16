import React from "react";
import { useState } from "react";

function List() {
    const [list, setList] = useState(()=>[
        { id: 1, title: "Lista en Estado 1" },
        { id: 2, title: "Lista en Estado 2" },
        { id: 3, title: "Lista en Estado 3" }

    ]);

    const add = ()=> setList([...list,{id:[list.length +1],title: `Lista en Estado ${list.length + 1}`}])

    return (
        <div>

            {list.map(el=>
                
            <p key={el.id}>{el.title}</p>
                
                )}

                <button onClick={add}>Agregar</button>



        </div>
    )
}

export default List;