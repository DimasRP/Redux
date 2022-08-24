import React from "react";
import { useSelector } from 'react-redux/es/exports';

const NavbarImage = ({data}) => {
    const reduxData = useSelector((state) => state)
    return ( 
        <div>
            <img src={reduxData.data.avatar}/>
        </div>
     );
}
 
export default NavbarImage;