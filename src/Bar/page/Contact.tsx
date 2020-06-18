import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles(() =>
  createStyles({
    title: {
        fontFamily:'Shadows Into Light,cursive',
        textAlign:'center',
    },
    main:{
        display:'flex',
        justifyContent:'space-around'
    }
  }),
);

export default function Contact(){
    const classes = useStyles();

    return(
        <>
        <div>お問い合わせ</div>
        <div className={classes.title} >
        <Typography className={classes.title} variant='h3'>Contact</Typography>
        <p>問い合わせ等はメールにてご連絡ください。</p>
        </div>
        <div className={classes.main} >
            <a href='mailto:ya.su.ya.su.w0612@outlook.jp' >
                <MailIcon style={{ fontSize: 70 }} color='primary' />
            </a>
            <a href='https://github.com/yasuyasu-w' target="_blank" rel="noopener noreferrer" >
                <GitHubIcon style={{ fontSize: 60 }} color='primary' />
            </a>
        </div>
        </>
    )
}