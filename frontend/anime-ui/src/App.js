import React from 'react';
import Home from './components/HomeComponent';
import About from './components/AboutusComponent';
import NavbarClass from './components/NavbarComponent';
import './App.css';
import { Switch, Route } from 'react-router-dom';



class App extends React.Component{

  render(){

    return(
      <>
      <div className="App">
        <NavbarClass/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/aboutus" component={About}/>
        </Switch>
      </div>
      </>
    );
  }
}

export default App;
