import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, /*useTheme,*/ Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import MailIcon from '@material-ui/icons/Mail';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
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
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {//theme.direction === 'rtl' ? <ChevronRightIcon /> : 
            <ChevronLeftIcon />
            }
          </IconButton>
        </div>
        <Divider />
         {/* {['HOME','自己紹介', 'スキル', '成果物','お問い合わせ'].map((text, index) => (
           <ListItem button key={text}>
           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
           <ListItemText primary={text} />
           </ListItem>
          ))} */}
          <List>
            <ListItem button key={'HOME'}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary='HOME' />
            </ListItem>
            <ListItem button key={'自己紹介'}>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary='自己紹介' />
            </ListItem>
            <ListItem button key={'スキル'}>
              <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
              <ListItemText primary='スキル' />
            </ListItem>
            <ListItem button key={'成果物'}>
              <ListItemIcon><LaptopChromebookIcon /></ListItemIcon>
              <ListItemText primary='成果物' />
            </ListItem>
            <ListItem button key={'お問い合わせ'}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary='お問い合わせ&SNS' />
            </ListItem>
        </List>
       {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>  */}
          </Drawer> 
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        </Typography>
      </main>
    </div>
  );
}
