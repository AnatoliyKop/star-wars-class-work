import React, {useContext} from 'react';
import {StarWarsContext} from "../utils/context.js";

const NavItem = ({itemTitle}) => {
    const value=useContext(StarWarsContext)
    return (
            <li onClick={ ()=> value.setPage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default NavItem;