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
        marginTop:'10%',
        marginBottom:'10%'
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
            <div className={classes.sentence}>
            <h3>用途・目的</h3>
            <p>自分の好きな音楽の良さや魅力を言語化しておくことで、
                後で見返したときにコレクションとして眺め、好きな音楽に対する
                理解や感動できるようにするため</p>
            </div>
            <div className={classes.sentence}>
            <h3>こだわり</h3>
            <p>1.一度書いた内容についての良さを、イチオシとして直感的に把握できる。<br/>
               2.アーティスト写真を貼り付けることができ、視覚的にわかりやすいものとしている。<br/>
               3.書いたコンテンツが追加、または編集順に並び替えられ、書いた時刻が示されている。</p>
            </div>
            <div className={classes.sentence}>
            <h3>使用言語、フレームワーク等</h3>
            <p>React×Reduxを用いて開発し、firebaseのhosting機能を用いて公開した。</p>
            </div>
            <div className={classes.sentence}>
            <h3>課題</h3>
            <p>1.appleやspotify等のapiを用いて音楽を視聴できるようにすること。<br/>
               2.他のアプリで投稿できるようにしたり、他の人と共有できる機能を実装すること。 
            </p>
            </div>
        </div>
        </>
    )
}

export default MusicContent