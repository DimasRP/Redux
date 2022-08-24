import React from "react";
import { useSelector } from 'react-redux/es/exports';

const NavbarName = () => {
    const reduxData = useSelector((state) => state)
    return ( 
        <div>
            <h1>{reduxData.data.name}</h1>
        </div>
     );
}
 
export default NavbarName;