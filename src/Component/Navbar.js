import React, { useState } from 'react'
import NavbarImage from './NavbarImage';
import NavbarName from './NavbarName';
import './Style.css'

const Navbar = () => {
    
    return ( 
        <div className='Navbar'>
            <NavbarName/>
            <NavbarImage/>
        </div>
     );
}
 
export default Navbar;