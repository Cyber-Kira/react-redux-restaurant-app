import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Switch, Route} from 'react-router-dom';

import Background from './food-bg.jpg';
import ItemPage from '../pages/itemPage';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path='/:item/:id' render={
                            ({match}) => {
                                const {id} = match.params;

                                return <ItemPage ItemId={id}/>
                            }
                        } />
                <Route path="/cart" component={CartPage} />
                <Route exact component={MainPage}/>
            </Switch>
        </div>
    )
}

export default App;