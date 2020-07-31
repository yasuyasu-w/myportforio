import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const ProfileIcon=({PushAndClose})=>{

    return (
        <ListItem button key={'自己紹介'} onClick={()=>PushAndClose('/profile')} >
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary='自己紹介' />
        </ListItem>
    )
}

export default ProfileIcon