import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Menu } from './MenuComponent';
import { DishDetail } from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }


    render() {
        const HomePage = () => {
            return (
                <Home/>
            );
        }

        const M = () => {
            return (
                <Menu dishes={this.state.dishes} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={M} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;

// <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />