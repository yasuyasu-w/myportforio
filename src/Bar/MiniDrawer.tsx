import React from 'react';
import { createStyles, makeStyles, /*useTheme,*/ Theme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';


import AppBars from './AppBars'
import Drawers from './Drawers'

import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

import Home from './page/Home'
import Profile from './page/Profile'
import Skill from './page/Skill'
import Product from './page/Product'
import MusicCollection from './page/ProductContent/MusicCollection'
import Contact from './page/Contact'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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






  


  return (
    <Router>
    <Switch>
    <div className={classes.root}>
      <CssBaseline />

      <AppBars open={open} setOpen={setOpen} />

      <Drawers open={open} setOpen={setOpen} />
   

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
        <Route path='/musiccollection' exact>
          <MusicCollection />
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
