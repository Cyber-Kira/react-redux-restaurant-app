import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc'
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import {withRouter} from 'react-router-dom';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const {RestoService, menuLoaded, menuError} = this.props;
        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(error => menuError());
    }

    render() {
        const {menuItems, loading, error} = this.props;

        if (error) {
            return <Error />
        }
        if (loading) {
            return <Spinner />
        }
        


        const items = menuItems.map(menuItem => {
            return <MenuListItem 
                onItemSelected={(ItemId, ItemName) => {
                    this.props.history.push(`${ItemName}/${ItemId}`);
                }}
                key={menuItem.id} 
                menuItem={menuItem}/>
        });

        return (
            View(items)
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
    menuError
};

const View = (items) => {
    return <ul className="menu__list">
                {items}
            </ul>;
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuList)));