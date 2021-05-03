import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            //selectedDish: null //tracks only the dish id not the entire dish
        };
    }

    onDishSelect(dishId) {
        console.log("dishSelected:" + dishId);
        this.setState({ selectedDish: dishId });
    }
    render() {
        const HomePage = () => {
            return(
                <Home/>
            )
        }
        return (
            <div>
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/> 
                        <Redirect to="/home"/>
                    </Switch>         
                </div>
                <Footer />
            </div>
    );
}
}

export default Main;
