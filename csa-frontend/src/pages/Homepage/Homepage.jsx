import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Grid, Button, Typography, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, makeStyles,
} from '@material-ui/core';
import '../../App.css';
import Header from '../../components/Header/Header';
import {default as samboOne} from '../../assets/sambo_1.png';
import {default as samboTwo} from '../../assets/sambo_2.png';
import {default as map} from '../../assets/map.png';
import {default as igIcon} from '../../assets/ig_icon.png'
import {default as fbIcon} from '../../assets/fb_icon.png'
const useStyles = makeStyles((theme) => ({
  main: {
    margin: '30px 0px 0px 0px'
  },
  content: {
    maxWidth: 920,
  },
  textSection: {
    // margin: 20
  },
  fullContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: '0 8%',
    },
  },
  // 1/2 of container
  halfContainer: {
    // margin: '40px 10px 0px 0px',
    width: "50%",
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      padding: '0 8% 10%',
    },
  },
  // 1/3 of container
  thirdContainer: {
    width: '30%',
  },
  // 1/4 of container
  fourthContainer: {
    width: '24%',
  },
  blueContainer: {
    marginTop: 30,
    padding: '0 20px 20px 20px',
    border: '1px solid',
    backgroundColor: '#96C6FF'
  },
  section: {
    marginTop: 40,
    marginBottom: 30,
  },
  text: {
    marginTop: 30,
    whiteSpace: "pre-wrap",
  },
  img: {
    height: '100%',
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '60%',
    },
  },
  mapImg: {
    marginTop: 30,
    width: '100%',
  },
  footer: {
    height: 60,
    backgroundColor: 'black',
  },
  textContrast: {
    color: 'white'
  },
  icon: {
    margin: "0px 20px 0px 20px",
    height: 30,
    width: 30,
  }
}))

const sectionOneTitle = 'Welcome To CSA'
const sectionOneText = `Welcome to the official website of Combat Sambo Academy.

Here you can find all the necessary information about the Sambo sport, the gym and its location, our team and values, class schedule, prices and much more.

The aim of CSA is to teach Discipline, Comradeship and Self-defense 
while providing friendly competition through sport.`

const sectionTwoTitle = 'What is Sambo?'
const sectionTwoText = `Combat Sambo and what we are training in Combat Sambo Academy a martial art.

Combat Sambo was first designed for USSR army soldiers to teach them self-defense without weapons. 
Combat Sambo is a mixture of martial art styles like judo, jiu jitsu, kickboxing and many other. 
It is an officially recognized sports discipline in many Eastern European countries that regularly 
host local and regional competitions. 

Some famous martial artists began their career from Combat Sambo. 
For example Fedor Emilianenko  four-time world champion, European champion, and six-time Russian national champion.

Khabib Nurmagomedov a two-time Combat Sambo World Champion, is currently considered #1 UFC lightweight champion with 
29 wins and 0 loses. As a matter of fact, when Khabib was a kid he could wrestle a bear thanks to what he learned on his Sambo training.`

const sectionThreeTitle = 'Our values'
const sectionThreeLeft = 'Friendship, because we believe that friends are important in our lives, they support us in hardship and share positive moments.'
const sectionThreeCenter = 'Safety, because we believe that nothing is so important as your own health and wellbeing. It is a basic, evolutionary human need.'
const sectionThreeRight = 'Sambo culture, because we believe that everyone must be able to stand for himself and the ones he cares most.'

const sectionFourTitle = 'Trainings'
const sectionFourText = `A well designed training program includes high endurance trainings to improve the control over the body, boost your stamina, and grow strength. 

Sparring, grappling, weights training, marathons, fun training like Football/Rugby/Basketball with wrestling elements.

We offer classes for various age groups. Some of our students are as young as four. 

We do not differenciate on gender, therefore everyone is welcome.`

const sectionFiveTitle = 'Our Team'
const sectionFiveLeft = `Oleg

Certified coach and owner of Combat Sambo Academy`

const sectionFiveCenter = `Fedor

Coach and floor manager`
const sectionFiveRight = `Khabib

Marketing and event manager`

const sectionSixTitle = `Our Rules`

const sectionSixText = `Everyone who joins CSA gym must obey following rules:

#1 Treat everyone with respect inside and outside the gym. Bullying is not welcome and perpetrators will be banned.
#2 No drugs or alcohol within our doors. This will be strictly controlled and punished accordingly`

const adultPass = `Adult Pass

10/day
50/month`

const teenagerPass = `Teenager Pass

8/day
40/month`

const kidsPass = `Kids Pass

5/day
30/month`

const familyPass = `Family Pass

2+1           2+2
20/day    25/day
100/m     120/m

`

const sectionEightText = `
Phone: 0858176759
Email: smexxem@gmail.com
Facebook: facebook.com/combat.sambo.academy`

const Homepage = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [open, setOpen] = useState(false);


  return (
    <Grid container direction="row" justify="center" className={classes.main}>
        <Header/>
        <Grid container justify="flex-start" direction="row" id="content" className={classes.content}>
          {/* SECTION 1 */}
          <Grid container className={classes.section} id="section1-content">
            <Grid container justify="flex-start" id="section1-left" className={classes.halfContainer}>
                    <Typography variant="h4">{sectionOneTitle}</Typography>
                    <Typography className={classes.text} align="justify" >{sectionOneText}</Typography>
            </Grid>
            <Grid container justify="center" id="section1-right" className={classes.halfContainer}>
                    <img className={classes.img} alt={"sambo_1"} src={samboOne}></img>
            </Grid>
          </Grid>
          {/* SECTION 2 */}
          <Grid container className={classes.section}>
            <Grid container justify="flex-start" id="section2-content" className={classes.fullContainer}>
                    <Typography variant="h4">{sectionTwoTitle}</Typography>
                    <Typography className={classes.text} align="justify" >{sectionTwoText}</Typography>
            </Grid>
          </Grid>
          {/* SECTION 3 */}
          <Grid container className={classes.section}>
            <Grid container justify="flex-start" id="section3-content">

                    <Typography variant="h4">{sectionThreeTitle}</Typography>
                    <Grid container>
                      <Typography className={classes.text} >Our vision is to promote:</Typography>
                    </Grid>
                    <Grid container justify="space-between">
                      <Grid container className={classes.thirdContainer}>
                        <Typography className={classes.text} align="justify" >{sectionThreeLeft}</Typography>
                      </Grid>
                      <Grid container className={classes.thirdContainer}>
                        <Typography className={classes.text} align="justify" >{sectionThreeCenter}</Typography>
                      </Grid>
                      <Grid container className={classes.thirdContainer}>
                        <Typography className={classes.text} align="justify" >{sectionThreeRight}</Typography>
                      </Grid>
                    </Grid>
                    
            </Grid>
          </Grid>
          {/* SECTION 4 */}
          <Grid container className={classes.section} id="section4-content">
            <Grid container justify="flex-start" id="section4-right" className={classes.halfContainer}>
                      <img className={classes.img}  alt={"sambo_2"} src={samboTwo}></img>
            </Grid>
            <Grid container justify="flex-start" id="section4-left" className={classes.halfContainer}>
                      <Typography variant="h4">{sectionFourTitle}</Typography>
                      <Typography className={classes.text} align="justify" >{sectionFourText}</Typography>
            </Grid>    
          </Grid>
                  

           {/* SECTION 5 */}
           <Grid container className={classes.section}>
            <Grid container justify="flex-start" id="section5-content">

                    <Typography variant="h4">{sectionFiveTitle}</Typography>
                    <Grid container justify="space-between">
                      <Grid container className={`${classes.thirdContainer} ${classes.blueContainer}`}>
                        <Typography className={classes.text} align="justify" >{sectionFiveLeft}</Typography>
                      </Grid>
                      <Grid container className={`${classes.thirdContainer} ${classes.blueContainer}`}>
                        <Typography className={classes.text} align="justify" >{sectionFiveCenter}</Typography>
                      </Grid>
                      <Grid container className={`${classes.thirdContainer} ${classes.blueContainer}`}>
                        <Typography className={classes.text} align="justify" >{sectionFiveRight}</Typography>
                      </Grid>
                    </Grid>
                    
            </Grid>
          </Grid>
             {/* SECTION 6 */}
          <Grid container className={classes.section}>
            <Grid container justify="flex-start" id="section6-content" className={classes.fullContainer}>

                    <Typography variant="h4">{sectionSixTitle}</Typography>
                    <Typography className={classes.text} align="justify" >{sectionSixText}</Typography>          
            </Grid>
          </Grid>
           {/* SECTION 7 */}
           <Grid container className={classes.section}>
            <Grid container justify="flex-start" id="section7-content">

                    <Typography variant="h4">{"Pricing"}</Typography>
                    <Grid container justify="space-between">
                      <Grid container className={`${classes.fourthContainer} ${classes.blueContainer}`}>
                        <Typography className={classes.text} align="justify" >
                        {adultPass}
                        </Typography>
                      </Grid>
                      <Grid container className={`${classes.fourthContainer} ${classes.blueContainer}`}>
                        <Typography className={classes.text} align="justify" >
                        {teenagerPass}
                        </Typography>
                      </Grid>
                      <Grid container className={`${classes.fourthContainer} ${classes.blueContainer}`}>
                        <Typography className={classes.text} align="justify" >
                        {kidsPass}
                        </Typography>
                      </Grid>
                      <Grid container className={`${classes.fourthContainer} ${classes.blueContainer}`}>
                        <Typography className={classes.text} align="justify" >
                        {familyPass}
                        </Typography>
                      </Grid>
                    </Grid>
                    
            </Grid>
          </Grid>
            {/* SECTION 8 */}
            <Grid container className={classes.section}>
            <Grid container justify="flex-start" id="section3-content">

                    <Typography variant="h4">{"Gym"}</Typography>
                    <Grid container>
                    <Grid container>
                      <Typography className={classes.text} >{"Our gym is located at the heart <3 of Dublin city:"}</Typography>
                      </Grid>
                      <Grid container>
                      <Typography className={classes.text} >Kings Street, Dublin 1</Typography>
                      </Grid>
                    </Grid>
                    <Grid container justify="space-between">
                      <Grid container>
                      
                      <img className={classes.mapImg} alt={"sambo_1"} src={map}></img>
                      </Grid>
                    </Grid>
                    
            </Grid>
          </Grid>
          {/* SECTION 8 */}
          <Grid container className={classes.section}>
            <Grid container justify="flex-start" id="section6-content">
                    <Typography variant="h4">{"Contact"}</Typography>
                    <Grid container>
                      <Typography className={classes.text} align="justify" >{sectionEightText}</Typography>          
                    </Grid>
            </Grid>
          </Grid>
          
          
      </Grid>      
      <Grid container justify="center" alignItems="center" className={classes.footer}>

      <img className={classes.icon} alt={"fb_icon"} src={fbIcon}></img>
      <Typography className={classes.textContrast}> Sambo Academy Ireland © 2021 </Typography>
      <img className={classes.icon} alt={"ig_icon"} src={igIcon}></img>
      </Grid>
          
    </Grid>
  );
};

Homepage.displayName = 'Homepage';
export default withRouter(Homepage);
