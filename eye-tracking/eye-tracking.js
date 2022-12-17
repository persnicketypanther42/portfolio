import React from 'react';
import '../index.css';
import './eye-tracking.css';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Project from '../project-card/project';
import { pastProjectData } from '../landing/projectdata';

const eyeTrackingData = pastProjectData[2];

function EyeTracking(){
        
    return (
            
            <div className='eye-tracking-summary'>

                <Typography variant='h1' className='title'>analyzing user behavior (ii)</Typography>
                <Typography variant='h2' className='subtitle'>design and eye-tracking</Typography>

                <Project
                    className='project'
                    title={eyeTrackingData.title}
                    desc={eyeTrackingData.desc}
                    imgPath={eyeTrackingData.imgPath}
                    imgAlt={eyeTrackingData.imgAlt}
                    linkPath='/portfolio/eye-tracking'
                />

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>1. Motivation</Typography>
                        <Typography variant='body1' className='section-desc'>
                            from my experience performing user research at cvs's self-checkout kiosk, i learned how to better qualitatively analyze a product for optimal experiences. however, as someone focused on ai/ml and computer vision in particular, i wanted to learn how to better quantify the user experience of a product. precdent research has shown that eye-tracking software can be used to quantify user experience, so i decided to try it out for myself when given the opportunity through brown university's ui/ux course: csci 1300!
                        </Typography>
                        <br />
                        <Typography variant='body1' className='section-desc'>
                            together with a group of three peers, i developed static, high-fidelity mockups of a webpage for a bakery in order to determine how design aspects affected user perceptions of the site. we used formed hypotheses about the effects of our designs on user behaviors, then recruited participants to interact with the static pages while under the watch of eye-tracking software. come along to learn what we found!
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>2. designing mockups</Typography>
                        <Typography variant='body1' className='section-desc'>
                            starting from the same initial page, our group split off into two pairs of two. each pair used figma to design a new static mockup of the bakery/cafe webpage. we decided to focus on the following design aspects:
                            <ol>
                                <li>image size</li>
                                <li>image placement</li>
                                <li>text size</li>
                            </ol>
                        </Typography>
                        <Typography variant='body1' className='section-desc'>
                            we chose to iterate on these aspects, as they are pivotal to viewer experiences, but can have mixed effects. for example, i was particularly keen on interrogating the effects of diminished text size, as some people may focus on decoding small text while others dismiss it as extraneous information. with these design focuses in mind, these are the final mockups we came up with:
                        </Typography>
                    </CardContent>
                    <div className='mockup-images'>
                        <CardMedia
                            className="Card-image"
                            component="img"
                            height="100%"
                            width="scale-down"
                            image={process.env.PUBLIC_URL + "/assets/D7ADC5D6-64C8-4716-BFF9-EE07B7509829.jpeg"}
                            alt="">
                        </CardMedia>
                        <CardMedia
                            className="Card-image"
                            component="img"
                            height="100%"
                            width="scale-down"
                            image={process.env.PUBLIC_URL + "/assets/eye-tracking2.PNG"}
                            alt="">
                        </CardMedia>
                    </div>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>3. formulating and testing hypotheses</Typography>
                        <Typography variant='body1' className='section-desc'>
                            based on our mockups and precedents from published literature regarding such design choices, we formulated the following hypotheses:
                            <ol>
                                <li><b>image size</b>: participants will spend more time looking at the page if the images are larger.</li>
                                <li><b>image placement</b>: participants will spend more time looking at the page if the images are placed closer to the top of the page.</li>
                                <li><b>text size</b>: participants will spend more time looking at the page if the text is larger.</li>
                            </ol>
                        </Typography>
                        <Typography variant='body1' className='section-desc'>
                            to test our hypotheses, we recruited two students at brown university to interact with our mockups. each interacted with just one mockup. we used eye-tracking software, with their consent, to record their eye movements as they interacted with the pages.
                            we then wrote python scripts to analyze the data. this allowed us to determine where users looked on the page in what order, and for how long. 
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>4. eye-tracking results</Typography>
                        <Typography variant='body1' className='section-desc'>
                            the images below show the eye-tracking the first of our two mockups. the red dots in the first set of each set of photos represent the participant's gaze, while the heatpoints in the second image of each set represent where the participant focused for extended periods of time.
                        </Typography>
                        <Typography variant='h5' className='callout'>mockup 1</Typography>
                        <div className='mockup-images'>
                            <CardMedia
                                className="Card-image"
                                component="img"
                                height="100%"
                                width="scale-down"
                                image={process.env.PUBLIC_URL + "/assets/F329567C-4560-42F3-B8C7-8BF9EB44AF09.jpeg"}
                                alt="">
                            </CardMedia>
                            <CardMedia
                                className="Card-image"
                                component="img"
                                height="100%"
                                width="scale-down"
                                image={process.env.PUBLIC_URL + "/assets/C21757A5-6787-418E-ADB7-2889EEE9EC0A.jpeg"}
                                alt="">
                            </CardMedia>
                        </div>
                        <Typography variant='body1' className='section-desc'>
                            we were intrigued that the user actually spent more time looking at the bottom of the page than the top of the page. we initially hypothesized this because of the larger font at the top of the page, but we were surprised to see that the user actually spent more time looking at the bottom of the page. we hypothesize that this is because the user was looking for the menu, which was located at the bottom of the page.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant='h5' className='callout'>mockup 2</Typography>
                        <div className='mockup-images'>
                            <CardMedia
                                className="Card-image"
                                component="img"
                                height="100%"
                                width="scale-down"
                                image={process.env.PUBLIC_URL + "/assets/C21757A5-6787-418E-ADB7-2889EEE9EC0A.jpeg"}
                                alt="">
                            </CardMedia>
                            <CardMedia
                                className="Card-image"
                                component="img"
                                height="100%"
                                width="scale-down"
                                image={process.env.PUBLIC_URL + "/assets/E4D1BD04-6E9A-4AA2-8EEE-DD244DB8635D.jpeg"}
                                alt="">
                            </CardMedia>
                        </div>
                        <Typography variant='body1' className='section-desc'>
                            we were even more surpised by the eye-tracking results from this mockup. we had hypothesized that the user would spend more time looking at the larger images, but we were surprised to see that the user actually spent more time looking at the menu text.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>5. Final Thoughts</Typography>
                        <Typography variant='body1' className='section-desc'>
                            i was very excited by this experiment, despite its evidently small scale and implications. as someone who has a background in highly quantitative research, it was exciting to see how the data could be used to inform design decisions and the creative process.
                            from a design standpoint, it was very interesting to see how users parsed these images. given the small sample size, it is difficult to draw any conclusions, but i hypothesize the following:
                            <ol>
                                <li>users spent more time looking at fine details (small text, large images) because it was more difficult to parse</li>
                                <li>placing images adjacent to corresponding text in a left to right fashion encourages users to focus on both text and images (assuming left-right reading order)</li>
                            </ol>
                        </Typography> 
                        <Typography variant='body1' className='section-desc'>
                            as a passionate researcher of computer vision, it was very exciting to partake in this experiment at its intersection with design. as someone who does not think of myself as a particularly deesign-oriented person while still being interested in design, i was encouraged to see that design and research can be combined in a way that is both exciting and takes advantage of my skillset.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            
        );

} export default EyeTracking;