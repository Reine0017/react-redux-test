import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircleTwoTone'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import {useSelector, useDispatch} from 'react-redux';
import {logIN_OUT} from './actions';

const useStyles = makeStyles((theme) => ({
    root:{
    },
    nav:{
        whiteSpace: 'nowrap',
        marginLeft:theme.spacing(5),
        display: 'flex',
        flexDirection: 'row',
        padding: 0
    },
    spacer: {
        flexGrow: 1
    }
}))

function NavBar(){
    const classes = useStyles();

    //TODOs
    //const theme = useTheme(); 
    //https://stackoverflow.com/questions/59464618/using-custom-theme-in-makestyles

    //How to make personal icon go right

    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return(
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">Nous</Typography>
              <div className={classes.nav}>
              <Button>
                  <Typography variant="title">Main Page</Typography>
              </Button>
              <Button>
                  <Typography variant="title">Community Feed</Typography>
              </Button>
              <Button>
                  <Typography variant="title">Leaderboards</Typography>
              </Button>
              <Button>
                  <Typography variant="title">About</Typography>
              </Button>
              <Button onClick={()=>dispatch(logIN_OUT())}>{isLogged?
                  <Typography variant="title">Log Out</Typography>
                  :<Typography variant="title">Log In</Typography>}
              </Button>
              {/* classes.spacer doesnt work
              <div className={classes.spacer}></div> */}
              {isLogged ?
                  <div>
                      <Button>
                        <Typography variant="title">Personal Page</Typography>
                      </Button>
                      <IconButton><AccountCircle/></IconButton>
                  </div>
                      :""}
              </div>
          </Toolbar>
      </AppBar>
    )
}

export default NavBar