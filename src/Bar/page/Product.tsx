import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import musicCollectImage from './img/music-collec-main.png'
import {useHistory} from 'react-router-dom'
//import MusicCollection from './ProductContent/MusicCollection'

const useStyles = makeStyles({
    title: {
        fontFamily:'Shadows Into Light,cursive',
        textAlign:'center',
        marginBottom:'50px'
    },
    rootCard:{
        width:'100%'
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },
    media: {
      height: '400px',
    },
  });

export default function Product(){
    const classes = useStyles();
    const history=useHistory()
    //const {nowPath,url}=useRouteMatch()

    return(
        <>
        <Typography variant='h3' className={classes.title} >Product</Typography>

        <Card className={classes.rootCard}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={musicCollectImage}
              title="Contemplative Reptile"
              />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            music collection
          </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
                 自分の好きな音楽のメモ等の記録を残せるサイトです。
             </Typography>
           </CardContent>

         </CardActionArea>
         <CardActions className={classes.cardActions}>
           <Button size="small" color="primary" onClick={()=>history.push(`/musiccollection`)} >
           <b><u>詳細はこちら</u></b>
           </Button>
         </CardActions>
       </Card>
  </>
    )
}