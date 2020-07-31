import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const ContactIcon=({PushAndClose})=>{

    return (
        <ListItem button key={'お問い合わせ'} onClick={()=>PushAndClose('/contact')} >
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary='お問い合わせ&SNS' />
        </ListItem>
    )
}

export default ContactIcon