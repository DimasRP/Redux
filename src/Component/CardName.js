import React from "react";
import { useSelector } from 'react-redux/es/exports';

const CardName = () => {
    const {data} = useSelector((state) => state)

    return ( 
        <div>
            <h1>{data.name}</h1>
        </div>
     );
}
 
export default CardName;