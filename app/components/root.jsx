import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Test from './test';
import ListOfRecipes from './listOfRecipes';
import RecipeDetails from './recipeDetailsPage';
import Login from './login';
import MenuAppBar from './navBar';
import FaveRecipes from './favorits';

export default class Root extends Component {
  async componentDidMount() {}
  render() {
    return (
      <Router>
        <main>
          <MenuAppBar />
          <Switch>
            <Route path="/" component={Test} exact />
            <Route path="/recipeslist" component={ListOfRecipes} exact />
            <Route path="/recipedetails" component={RecipeDetails} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/favorites" component={FaveRecipes} exact />
          </Switch>
        </main>
      </Router>
    );
  }
}
