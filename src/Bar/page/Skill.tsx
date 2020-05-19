import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './img/pythonicon.png'



const useStyles = makeStyles(() =>
  createStyles({
    title: {
        textAlign:'center'
    },
    GridContainer:{
        flexGrow: 1,
        marginTop:'10vh'
    },
    gridItem:{
        maxWidth: '50%',
        flexBasis: '50%'
    },
    paper: {
      height: '100%',
    },
    gridInnerContainer:{
        flexGrow:1
    },
    gridInnerItem:{
        maxWidth:'100%',
        flexBasis:'100%'
    },
    innerPaper:{
        height:'40px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        fontSize:'30px'

    },
    ul:{
        paddingRight:'30px',
        fontSize:'20px'
    },
    li:{
        marginBottom:'20px'
    }

  }),
);
export default function Skill(){
    const classes = useStyles();

    return(
        <>
        <div>スキル</div>

        <Typography variant='h3' className={classes.title} >スキル</Typography>

        <Grid container className={classes.GridContainer} justify="center" spacing={2} >
            <Grid item className={classes.gridItem} >
              <Paper className={classes.paper} >
                  <Grid container className={classes.gridInnerContainer} >
                      <Grid item className={classes.gridInnerItem} >
                          <Paper className={classes.innerPaper} >
                              <div>python</div>
                              <Avatar alt="Remy Sharp" src={require("./img/pythonicon.png")} />
                          </Paper>
                      </Grid>
                  </Grid>
                  <ul className={classes.ul}>
                      <li className={classes.li} >学習期間:2～3ヶ月程度</li>
                      <li className={classes.li} >内容:基礎文法や機械学習のライブラリーであるyoloやOpen-CVを利用して、
                          物体認識用のサンプルを使用、カスタマイズした。</li>
                  </ul>
              </Paper>
            </Grid>

            <Grid item className={classes.gridItem} >
              <Paper className={classes.paper} >
                  <Grid container className={classes.gridInnerContainer} >
                      <Grid item className={classes.gridInnerItem} >
                          <Paper className={classes.innerPaper} >
                              <div>javascript</div>
                              <Avatar alt="Remy Sharp" src={require("./img/reacticon.png")} />
                          </Paper>
                      </Grid>
                  </Grid>
                  <ul className={classes.ul}>
                      <li className={classes.li} >学習期間:3ヶ月程度</li>
                      <li className={classes.li} >内容:文法の基礎をドットインストールやyoutubeの動画等で学習し、
                                                  その後にrectを学習し、codesandbox等でカレンダーを利用したアプリや勤怠管理アプリを作成中...</li>
                  </ul>
              </Paper>
            </Grid>
        </Grid>
        </>
    )
}