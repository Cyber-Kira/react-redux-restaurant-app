import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc'
import {menuLoaded} from '../../actions';
import Spinner from '../spinner';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        const {RestoService, menuLoaded} = this.props;
        RestoService.getMenuItems()
            .then(res => menuLoaded(res));
    }

    render() {
        const {menuItems, loading} = this.props;

        if (loading) {
            return <Spinner />
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    menuLoaded
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));