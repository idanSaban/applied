import React from 'react';
import { FiMenu } from "react-icons/fi";

const MenuButton = function ({ toggleMenu }) {
    return (
        <span id="menu-button" onClick={toggleMenu}>
            <FiMenu />
        </span>
    )
}

export default MenuButton