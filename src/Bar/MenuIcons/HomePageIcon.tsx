import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';




const HomePageIcon=({PushAndClose})=>{

    return (
        <ListItem button key={'HOME'} onClick={()=>PushAndClose('/')}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary='HOME' />
        </ListItem>
    )
}

export default HomePageIcon