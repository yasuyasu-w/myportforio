import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, /*useTheme,*/ Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidthApp = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: '#1F1A58',
      zIndex: theme.zIndex.modal+1 , 
      transition: theme.transitions.create(['width','margin' ], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
    },
    appBarShift: {
      marginLeft: drawerWidthApp,
      width: `calc(100% - ${drawerWidthApp}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
      '@media (min-width: 600px)': {
        display: 'none'
      }
    },
    hide: {
      display: 'none',
    },
  }),
);


const AppBars=({open,setOpen})=>{
    const classes = useStyles();

    const handleDrawerOpen = () => {
         setOpen(true);
       };

    return(
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
            Yasufumi Watanabe's Portforio
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default AppBars