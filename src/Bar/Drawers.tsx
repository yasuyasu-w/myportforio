import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, /*useTheme,*/ Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
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

import {useHistory} from 'react-router-dom'

const drawerWidthcopy = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidthcopy,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidthcopy,
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
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
      fontSize:20,
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }
  }),
);


const Drawers=({open,handleDrawerClose})=>{
  const classes = useStyles()
  const history=useHistory()
    return(
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
        <div>MENU</div>
          <IconButton onClick={handleDrawerClose}>
            {//theme.direction === 'rtl' ? <ChevronRightIcon /> : 
            <ChevronLeftIcon />
            }
          </IconButton>
        </div>
        <Divider />
          <List>
            <ListItem button key={'HOME'} onClick={()=>history.push('/')}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary='HOME' />
            </ListItem>
            <ListItem button key={'自己紹介'} onClick={()=>history.push('/profile')}>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary='自己紹介' />
            </ListItem>
            <ListItem button key={'スキル'} onClick={()=>history.push('/skill')}>
              <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
              <ListItemText primary='スキル' />
            </ListItem>
            <ListItem button key={'成果物'} onClick={()=>history.push('/product')}>
              <ListItemIcon><LaptopChromebookIcon /></ListItemIcon>
              <ListItemText primary='成果物' />
            </ListItem>
            <ListItem button key={'お問い合わせ'} onClick={()=>history.push('/contact')}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary='お問い合わせ&SNS' />
            </ListItem>
        </List>
          </Drawer> 
    )
}

export default Drawers