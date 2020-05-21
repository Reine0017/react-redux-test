import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, logIN_OUT} from './actions';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import NavBar from './NavBar'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Nous</Typography>
          <NavBar/>
        </Toolbar>
      </AppBar>
      
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(5))}>-</button>
      {isLogged ? 
        <h3>Valuable Information I shouldn't see</h3> 
        : ""}
      
    </div>
  );
}

export default App;
