import ItemDetail from './ItemDetail';
import React, {useState,useEffect} from 'react';



const ItemDetailContainer = () => {

    const[productos,setProductos]=useState()
    useEffect(()=>{

    setTimeout(()=>{
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=parlantepionner=2")
.then(response=>response.json())
.then(data=>setProductos(data.results));
        },5)

    },[]);

    return (
    <div className="Detalle">
        {
          productos &&  productos.map(item=>
            <ItemDetail key={item.id} jsonpack={item} />
        )}


    </div>

   )
}

export default ItemDetailContainer;