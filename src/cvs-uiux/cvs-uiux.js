import React from 'react';
import '../index.css';
import './cvs-uiux.css';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Project from '../project-card/project';
import { pastProjectData } from '../landing/projectdata';

const personasData = pastProjectData[1];

function Personas(){
        
    return (
            
            <div className='cvs-summary'>

                <Typography variant='h1' className='title'>analyzing user behavior (i)</Typography>
                <Typography variant='h2' className='subtitle'>cvs self-checkout</Typography>

                <Project
                    className='project'
                    title={personasData.title}
                    desc={personasData.desc}
                    imgPath={personasData.imgPath}
                    imgAlt={personasData.imgAlt}
                    linkPath={personasData.linkPath}
                />

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>1. Motivation</Typography>
                        <Typography variant='body1' className='section-desc'>
                        entering the world of a user is a pivotal task in the life of any engineer. for the purpose of gaining experience in this area, I conducted a mock user study on the self-checkout kiosk of my local CVS pharmacy.                        </Typography>
                        <br />
                        <Typography variant='body1' className='section-desc'>
                        The goal of this mock study was to better understand the user experience at the self-checkout kiosk,
                        and to identify any potential points of common frustration. Using a combination of observation and interview
                        techniques, I was able to identify several areas of improvement for the kiosk's design, and draw a storyboard that's (almost) recognizable as anything other than a cave painting!
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>2. preparation</Typography>
                        <Typography variant='body1' className='section-desc'>
                        Before conducting the study, I created a list of questions to ask the participants and
            studied the kiosk's design, noting important components and their functions.
                            <ol>
                                <li>prompt screen where users enter information and receive instructions</li>
                                <li>a barcode scanner</li>
                                <li>a card reader</li>
                                <li>a bagging area where users place scanned items</li>
                            </ol>
                        </Typography>
                        <CardMedia
                        className="Card-image-cvs"
                        component="img"
                        height="100%"
                        width="scale-down"
                        image={process.env.PUBLIC_URL + "/assets/Interface sketch.png"}
                        alt="kiosk sketch">
                        </CardMedia>
                    </CardContent>
                </Card>
                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>3. observation an interviews</Typography>
                        <Typography variant='body1' className='section-desc'>
                        Over the course of one hour, ten users were observed utilizing the public-facing interface.
            Three of these users were noted to struggle in particular; these users became the focus of the study and were
            approached for interview after their checkout experiences.
                        </Typography>
                        <Typography variant='h5' className='callout'>
                        interview questions
                        </Typography>
                        <Typography variant='body1' className='section-desc'>
                        <ol>
                            <li>Why did you choose to use the self-checkout option versus in-person with a cashier?</li>
                            <li>In a typical month, how many times do you go to CVS? Of those times, how many do you use self-checkout as opposed to cashier checkout?</li>
                            <li>Would you say you agree with, somewhat agree with, are neutral toward, somewhat disagree with, or disagree with
                                the following statement? “It is easy to use the self-checkout kiosk.”</li>
                            <li>When using self-checkout, do you prefer any particular payment method? Why or why not?</li>
                            <li>Do you have any issues with self-checkout related to the kiosk and its interface? What do you think could be done to fix those problems?</li>
                        </ol>
                        </Typography>
                        <Typography variant='h5' className='callout'> summary of responses </Typography>
                        <Typography variant='body1' className='section-desc'>
                        <ul align="left">
                            <li>
                            Two appeared college-aged, likely result of neighborhood; one appeared to be middle-aged
                            <ul align="left">
                                <li>Younger customers purchased snacks, frozen meals, makeup
                                </li>
                                <li>Middle-aged customer purchased medicine (cough syrup, ibuprofen, etc.)
                                </li>
                            </ul>
                            </li>
                            <li>
                            Several had issues with barcode scanner--facial expressions including grimaces, frowns, etc. at this step
                            <ul align="left">
                                <li>One took several minutes of trying before leaving without paying
                                </li>
                                <li>One gave up, went to cashier checkout 
                                </li>
                            </ul>
                            </li>
                            <li>Two attempted to select cash payment option and needed assistance, similar error when cash-back requested.
                            </li>
                            <li>No apparent issues with bagging, providing payment info
                            </li>
                        </ul>
                        </Typography>
                        <Typography variant='h5' className='callout'> findings </Typography>
                        <Typography variant='body1' className='section-desc'>
                        <ul align="left">
                            <li>Typically chose self-checkout kiosks for perceived convenience and efficiency</li>
                            <li>Despite having difficulties, interviewees self-described as regulars at CVS (3+ visits per month), suggests possible issue(s) with interface itself</li>
                            <li>Widely varying ratings of self-checkout kiosk ease of use, averaged out to neutral</li>
                            <li>All preferred to tap with a card or Apple Pay, citing speed as deciding factor (better than chip)</li>
                            <li>Common issues included: accidentally requesting cash back/trying to pay with cash, difficulty scanning items (esp. those with “irregular shapes”) to the point of giving up, accidentally scanning items multiple times, unresponsive screen</li>
                        </ul>
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>developing user personas</Typography>
                        <Typography variant='body1' className='section-desc'>
                            to explore the full scope of users who might struggle with the kiosk, based on the users i interviewed, i developed two user personas: something wholly new to me. it was interesting to hear in my ui/ux
                            course that such a simple technqiue could help drive user research for such a long time (since the 1990s), and i was excited to try it out for myself. The two archetypal personas i created, andrew andrew
                            and janelle, are described below using empathy maps i made.
                        </Typography>
                        <Typography variant='h5' className="callout">
                            persona #1: andrew
                        </Typography>
                        <Typography variant='body1' className='setion-desc'>
                        Andrew is a 21-year-old junior at Brown University who is taking a much needed study break to get a snack, as he has an exam tomorrow and doesn’t have time to cook a meal. Unfortunately, the barcode for his personal ice cream is on a rounded edge, and the barcode scanner is not picking it up, causing him to gives up and leave. Andrew represents the users because he is of college age, purchasing similar items, and faces a common problem among the users I observed: barcode scanner difficulties.
                        </Typography>
                        <CardMedia
                            className="Card-image-cvs"
                            component="img"
                            height="100%"
                            width="scale-down"
                            image={process.env.PUBLIC_URL + "/assets/andrew-empathy.png"}
                            alt="kiosk sketch" />
                        <Typography variant='h5' className="callout">
                            persona #2: janelle
                        </Typography>
                        <Typography variant='body1' className='setion-desc'>
                        Janelle is a 40-year-old mother whose daughter is sick, so she rushed out to purchase fever medicine at CVS. In her rush out the door, she forgot to take her wallet, and she did not read the signs saying she could not make cash purchases at the self-checkout kiosk, leading to errors with the kiosk. Janelle is representative of the users I observed, as she helps round out the age demographics, faces the common issue of difficulties due to attempted use of cash at the kiosk, and buys products I observed being bought (and which are commonly bought at drug stores in general).                        </Typography>
                        <CardMedia
                            className="Card-image-cvs"
                            component="img"
                            height="100%"
                            width="scale-down"
                            image={process.env.PUBLIC_URL + "/assets/Janelle-empathy.png"}
                            alt="kiosk sketch" />
                    </CardContent>
                </Card>
                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>5. storyboarding</Typography>
                        <Typography variant='body1' className='section-desc'>
                        focusing in on the persona I developed for Andrew, I created a storyboard to further explore this archetype based on my observations and interview finding, with a particular focus on his frustrations.
                        </Typography> 
                        <Typography variant='body1' className='section-desc'>
                        <CardMedia
                            className="Card-image-cvs"
                            component="img"
                            height="100%"
                            width="scale-down"
                            image={process.env.PUBLIC_URL + "/assets/Storyboard.jpg"}
                            alt="kiosk sketch" />
                        </Typography>
                        <Typography variant='body1' className='section-desc'>
                            though i'm ... perhaps not the most visually artistic person ... i think this gets across the biggest observation i made: users choose the self-checkout kiosk because it's perceived as more convenient
                            or efficient. ironically, because technical issues aren't infrequent, it seems like this ends up not being the case for a significant subset of people who use the self-checkout. 
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>6. final thoughts</Typography>
                        <Typography variant='body1' className='section-desc'>
                        Based on my findings, I identified the following as key components for improvement at the CVS self-checkout kiosk: barcode
                        scanner difficulties, cash payment difficulties, and unresponsive screen. The user personas I developed can be used to guide
                        future design decisions, and the storyboard I created can be used to guide future testing. Considering that the CVS self-checkout
                        kiosk is meant to be a quick and easy alternative to cashier checkout, it is important to address these issues in order to
                        improve the user experience.
                        </Typography> 
                        <br />
                        <Typography variant='body1' className='section-desc'>
                        overall, i enjoyed this bit of a foray into ux research. i think it's nice that for certain fields, it's very easy to watch users out in the wild; given that my career path likely won't take me that route, i'm intrigued to learn more about what ux research looks like for
                        privately facing interfaces. particularly, i wonder if ux research in those cases (e.g. for software industries) is concerned about changes to user behavior when they know they are in an observational environment.
                        i will say, the process of creating the user personas was much more difficult than i thought it would be, despite my enjoyment. being neurodivergent, it is much more difficult for me to put myself in other people's shoes than it is for the average person.
                        i think going forward, this could be a good exercise to keep in my back pocket when trying to decode people's actions or motivations.
                        </Typography> 
                    </CardContent>
                </Card>
            </div>
            
        );

} export default Personas;