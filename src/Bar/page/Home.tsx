import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width:'100%',
        display: 'flex',
	    justifyContent: 'center',
        alignItems: 'center',
        },
  });

  export default function Home(){
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
        <Typography variant="h3" gutterBottom >
        ようこそ！<br/>
        ポートフォリオページへ！
        </Typography>
        </div>
    )
  }