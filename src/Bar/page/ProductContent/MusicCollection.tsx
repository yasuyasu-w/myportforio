import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import musicCollectImage from '../img/music-collec-main.png'

const useStyles=makeStyles({
    rootCard:{
        width:'100%'
    },
    cardMedia:{
        height:'500px'
    },
    sentence:{
        marginTop:'5%',
        marginBottom:'5%'
    },
    link_source:{
        display:'flex',
        justifyContent:'space-around'
    }
})

const MusicContent=()=>{
    const classes = useStyles();

    return (
        <>
        <Card className={classes.rootCard}>
           <CardActionArea>
            <CardMedia className={classes.cardMedia}
                       title='Contemplative Reptile'
                       image={musicCollectImage} />           
          </CardActionArea>  
        </Card>
        <div>
            <div className={classes.link_source+" "+classes.sentence}>
            <div>
                <h3>リンク</h3>
                <a href="https://music-collection-ys.firebaseapp.com/"
                   target="_blank"
                   rel="noopener noreferrer">music collection</a>
            </div>
            <div>
                <h3>ソースコード</h3>
                <a href="https://github.com/yasuyasu-w/music-collection-1/"
                   target="_blank"
                   rel="noopener noreferrer">githubへ</a>
            </div>
            </div>
            <div className={classes.sentence}>
            <h3>概要</h3>
            <p>お気に入りの音楽のメモツール</p>
            </div>
        </div>
        </>
    )
}

export default MusicContent