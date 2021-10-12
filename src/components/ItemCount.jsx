import React from "react";
import {Button,ButtonGroup,Table} from 'react-bootstrap';


const ItemCount=({min,max,onAdd,count,stock,product_name})=>{

console.log(count);
    return (
    <>
        <p></p>
        <p></p>
            <ButtonGroup>
                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>{product_name}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Button className="button" onClick={min}>Quitar</Button>
                            </td>
                            <td>
                                {count}
                            </td>
                            <td>
                                <Button className="button" onClick={max}>Agregar</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </ButtonGroup>
        </>
    );
};

export default ItemCount;