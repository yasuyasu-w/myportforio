import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width:'100%',
        height:'100%',
        textAlign:'center'
        },
    main:{
       marginTop:"30vh"
    }
  });

  export default function Home(){
    const classes = useStyles();
    
    return(
      <>
      <div>HOME</div>
        <div className={classes.root}>
        <Typography variant="h3" gutterBottom className={classes.main} >
        ようこそ！<br/>
        ポートフォリオページへ！
        </Typography>
        </div>
      </>  
    )
  }