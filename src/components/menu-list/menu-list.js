import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc'

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        const {RestoService, menuLoaded} = this.props;
        RestoService.getMenuItems()
            .then(res => menuLoaded(res));
    }

    render() {
        const {menuItems} = this.props;

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

const mapStateToProps = (state) => ({menuItems: state.menu})

const mapDispatchToProps = (dispatch) => {
    return {
        menuLoaded: (newMenu) => {
            dispatch({
                type: 'MENU_LOADED',
                payload: newMenu
            })
        }
    }
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));