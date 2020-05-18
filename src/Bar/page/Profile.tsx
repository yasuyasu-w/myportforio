import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        width:'100%',
       
    },
    title:{
        textAlign:'center'
    },
    abator:{
        width:'200px',
        height:'200px',
        marginTop:'80px',
        marginLeft:'auto',
        marginRight:'auto'
        
    },
    li:{
        marginBottom:'15px'
    }
  }),
);

export default function Profile(){
    const classes = useStyles();
    return(
        <>
        <div>プロフィール</div>
        <div className={classes.root}>
        <Typography variant='h3' className={classes.title} >自己紹介</Typography>  
        <Avatar alt="Remy Sharp" src="" className={classes.abator} />
        <ul style={{marginTop:50,fontSize:20}}>
            <li className={classes.li}>名前:渡邉 靖紋</li>
            <li className={classes.li}>出身:福岡県(熊本在住)</li>
            <li className={classes.li}>学歴:熊本県立大学 総合管理学部 4年</li>
            <li className={classes.li}>趣味:音楽を聴くこと ジャンルはhiphopやreggae,R&Bなど....</li>
            <li className={classes.li}>一言:現在はフロントエンドエンジニアを目指して日々学習しています。将来的には、バックエンドやデザイン含め、フルスタックで活躍していきたいです!</li>
        </ul>
        </div>
        </>
    )
}