import React, {Component} from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc'
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class ItemPage extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService, menuLoaded, menuError} = this.props;
        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(error => menuError());
    }

    render() {
        const {loading, error, addedToCart} = this.props;
        if (error) {
            return <Error />
        }

        if (loading) {
            return <Spinner />
        }
        const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id)

        return (
            <View 
                item={item}
                onAddToCart={() => addedToCart(item.id)} />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
};

const View = ({item, onAddToCart}) => {
    const {title, price, url, category, icon} = item;
    
    return <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span>
                    <div className="menu__icon"><img src={icon} alt={category}></img></div>
                </div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
            </li>
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));