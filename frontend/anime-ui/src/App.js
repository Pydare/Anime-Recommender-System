import React, { Fragment } from 'react';
import Home from './components/HomeComponent';
import About from './components/AboutusComponent';
import NavbarClass from './components/NavbarComponent';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';



class App extends React.Component{

  render(){

    return(
      <>
      <div className="App">
        <NavbarClass/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
      </>
    );
  }
}

export default App;
