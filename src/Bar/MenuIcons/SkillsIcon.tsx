import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'


const SkillsIcon=({PushAndClose})=>{

    return (
        <ListItem button key={'スキル'} onClick={()=>PushAndClose('/skill')}>
              <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
              <ListItemText primary='スキル' />
        </ListItem>
    )
}

export default SkillsIcon