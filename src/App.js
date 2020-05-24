import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import NavBar from './NavBar'
import SearchTechTags from './SearchTechTags'
import './App.css'
import SearchIssue from './SearchIssue.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">Nous</Typography>
            <NavBar/>
          </Toolbar>
        </AppBar>
        <Route path="/SearchTechTags" component={SearchTechTags}/>
        <Route path="/searchProjsTags" component={SearchIssue}/>
        <h1>Counter {counter}</h1>
        <button onClick={()=>dispatch(increment(5))}>+</button>
        <button onClick={()=>dispatch(decrement(5))}>-</button>
        {isLogged ? 
          <h3>Valuable Information I shouldn't see</h3> 
          : ""}
      </div>
    </Router>
  );
}

export default App;
