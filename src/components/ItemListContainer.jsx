import React from 'react'


export default function ItemListContainer({saludo}) {
    
   const divStyles = {color: "#60269e", FontSize:"20px"} 
    return (
        <div style={divStyles}>
            <h1>{saludo}</h1> 
             
        </div>
    )
}