import React from 'react';

const NavItem = ({itemTitle}) => {
    return (
        <div>
            <li onClick={ ()=> alert(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
        </div>
    );
};

export default NavItem;