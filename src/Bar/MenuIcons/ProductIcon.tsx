import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';

const ProductIcon=({PushAndClose})=>{

    return (
        <ListItem button key={'成果物'} onClick={()=>PushAndClose('/product')}>
              <ListItemIcon><LaptopChromebookIcon /></ListItemIcon>
              <ListItemText primary='成果物' />
        </ListItem>
    )
}

export default ProductIcon