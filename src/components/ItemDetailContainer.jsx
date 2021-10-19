import ItemDetail from './ItemDetail';
import React, {useState,useEffect} from 'react';


const ItemDetailContainer = () => {

    const[producto,setProducto]=useState(null)
    useEffect(()=>{

    setTimeout(()=>{
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=parlantepionner=2")
.then(response=>response.json())
.then(data=>setProducto(data.results[0]));
        },5)

    },[]);

    return (
    <div className="Detalle">
        {producto?
          <ItemDetail jsonpack={producto} />
        :
            <h4>Cargando</h4>

        }


    </div>

   )
}

export default ItemDetailContainer;