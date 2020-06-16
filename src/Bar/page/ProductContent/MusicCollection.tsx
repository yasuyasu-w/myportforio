import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import musicCollectImage from '../img/music-collec-main.png'

const useStyles=makeStyles({
    rootCard:{
        width:'100%'
    },
    cardMedia:{
        height:'100%'
    }
})

const MusicContent=()=>{
    const classes = useStyles();

    return (
        <>
        <div>music</div>
        <Card className={classes.rootCard}>
            <CardMedia className={classes.cardMedia}
                       title='Contemplative Reptile'
                       image={musicCollectImage} />
        </Card>
        </>
    )
}

export default MusicContent