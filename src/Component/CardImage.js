import React from "react";
import { useSelector } from 'react-redux/es/exports';

const CardImage = () => {
    const reduxData = useSelector((state) => state)
    return ( 
        <div>
            <img src={reduxData.data.avatar} className="avatar"/>
        </div>
     );
}
 
export default CardImage;