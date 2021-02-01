import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onItemSelected}) => {
    const {title, price, url, category, icon, id} = menuItem;
    return (
        <li
        className="menu__item"
        onClick={() => onItemSelected(id, title)}>
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span>
                <div className="menu__icon"><img src={icon} alt={category}></img></div>
            </div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;