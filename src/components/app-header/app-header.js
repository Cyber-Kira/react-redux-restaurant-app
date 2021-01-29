import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import {Link} from 'react-router-dom';
import './app-header.scss';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link className="header__link" href="#">
                Menu
            </Link>
            <Link className="header__link" href="#">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

export default AppHeader;