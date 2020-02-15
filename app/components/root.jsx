import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import store from '../store';
import ListOfRecipes from './listOfRecipes';
import RecipeDetails from './recipeDetailsPage';
import Login from './login';
import SignUp from './signup';
import MenuAppBar from './navBar';
import FaveRecipes from './favorits';
import { initialLogInAttempt } from '../redux/authentication';
export default class Root extends Component {
  async componentDidMount() {
    await store.dispatch(initialLogInAttempt());
  }
  render() {
    return (
      <Router>
        <main>
          <MenuAppBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/recipeslist" component={ListOfRecipes} exact />
            <Route path="/recipedetails" component={RecipeDetails} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/favorites" component={FaveRecipes} exact />
            <Route path="/signup" component={SignUp} exact />
          </Switch>
        </main>
      </Router>
    );
  }
}
