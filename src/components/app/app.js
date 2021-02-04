import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Switch, Route} from 'react-router-dom';

import Background from './food-bg.jpg';
import ItemPage from '../pages/itemPage';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/cart" component={CartPage} />
                <Route path = '/:id' component ={ItemPage}/>
            </Switch>
        </div>
    )
}

export default App;