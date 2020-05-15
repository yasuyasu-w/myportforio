import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, /*useTheme,*/ Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



import Drawers from './Drawers'

import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

import Home from './page/Home'
import Profile from './page/Profile'
import Skill from './page/Skill'
import Product from './page/Product'
import Contact from './page/Contact'


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.modal+1 , 
      transition: theme.transitions.create(['width','margin' ], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function MiniDrawer() {
  const classes = useStyles();
  //const theme = useTheme();
  const [open, setOpen] = React.useState(false);




  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  


  return (
    <Router>
    <Switch>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
         <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            渡邉靖紋のポートフォリオ
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawers open={open} handleDrawerClose={handleDrawerClose} />
   

      <main className={classes.content}>
      <div className={classes.toolbar} />
 
        <Route path="/" exact>
        <Home />
        </Route>
        <Route path="/profile" exact>
        <Profile />
        </Route>
        <Route path="/skill" exact>
        <Skill />
        </Route>
        <Route path="/product" exact>
        <Product />
        </Route>
        <Route path="/contact" exact>
        <Contact />
        </Route>
        
      </main>
    </div>
        </Switch>
      </Router>
  );
}
