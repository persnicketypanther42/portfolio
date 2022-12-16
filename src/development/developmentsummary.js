import React from 'react';
import '../index.css';
import './developmentsummary.css';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Project from '../project-card/project';
import { pastProjectData } from '../landing/projectdata';

const skincareAppData = pastProjectData[3];

function DevelopmentSummary(){
        
    return (
            
            <div className='development-summary'>

                <Typography variant='h1' className='title'>skincare superhero</Typography>
                <Typography variant='h2' className='subtitle'>a simple online shopping web application</Typography>

                <Project
                    className='project'
                    title='Skincare Superhero: Live Link'
                    desc={skincareAppData.desc}
                    imgPath={skincareAppData.imgPath}
                    imgAlt={skincareAppData.imgAlt}
                    linkPath='/portfolio/skincare-app/live'
                />

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>1. Motivation</Typography>
                        <Typography variant='body1' className='section-desc'>
                            inspired by the advent of online AI/ML services like chatgpt, i have developed a growing interest in web development. having no experience in building web apps, i was motivated to take on the project of building a simple online shoppping web application in order to learn more about the process of web development. 
                        </Typography>
                        <br />
                        <Typography variant='body1' className='section-desc'>
                            in particular, i chose a skincare app because there is a vast amount of skincare products available at the moment, which often leads me to struggle to choose the right ones for my skin type, and i wanted to build an app that would help me and others like me to make better decisions about skincare products.
                        </Typography>
                        <br />
                        <Typography variant='body1' className='section-desc'>
                            go ahead and try it for yourself <a href='/portfolio/skincare-app/live'>here</a>, and come along as i describe the process of building the app and the concepts i learned about in my first foray into stateful/dynamic web development!
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>2. modeling with components</Typography>
                        <Typography variant='body1' className='section-desc'>
                            i built skincare superhero using the react.js framework. since this was my first time coding in javascript, i had two simple goals for this app:
                            <ol>
                                <li> build a simple, functional web app that allows users to browse a catalog of products and add them to a shopping cart</li>
                                <li> employ filtering and sorting functionality that are standard for online shopping sites. </li>
                            </ol>
                        </Typography>
                        <Typography>
                            to achieve this, i separated the app out into components based on their function. the app is organized into the following components:
                            <ol>
                                <li>the <b>App</b> component (which organizes information about state),</li>
                                <li>the <b>ListItem</b> component (which represents products displayed on the 'available products screen'),</li>
                                <li>the <b>CartItem</b> component (which represents products placed in the shopping cart),</li>
                                <li>the <b>SortOpts</b> component (which manages the sorting options of the app),</li>
                                <li>and the <b>FilterOpts</b> component (which manages the filtering options of the app).</li>
                            </ol>
                        </Typography>
                        <Typography>
                            i was quite confused early on while i was building the components, as this was my first time coding an app from scratch in javascript.
                            however, by relating components to the mental model i developed for how shopping works, i was able to organize the app into a hierarchy of components that made sense to me.
                            soon enough, i had built the visual components and was ready to move on to the next step: passing data between components!
                        </Typography>
                    </CardContent>
                    <CardMedia
                        className="Card-image"
                        component="img"
                        height="100%"
                        width="scale-down"
                        image={process.env.PUBLIC_URL + "/assets/skincare-app.png"}
                        alt="skincare superhero organization">
                    </CardMedia>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>3. Passing static Data: Props</Typography>
                        <Typography variant='body1' className='section-desc'>
                            in order to pass data between components, i used the <b>props</b> system. 
                        </Typography>
                        <Typography variant='body1' className='section-desc'>
                            props are used to pass data from a parent component to a child component during initialization and rendering.
                        </Typography>
                        <Typography variant='body1' className='section-desc'>
                            <ol>
                                <li>the <b>App</b> component obtains data from the JSON-formatted dictionary,</li>
                                <li>then makes <b>Listitem</b> components for each product in the dictionary, passing each one its attributes as props.</li>
                                <li>the <b>App</b> also obtains data on sorting options and filtering options from the dictionary,</li>
                                <li>then makes <b>SortOpts</b> and <b>FilterOpts</b> components, passing each one the attributes of a sorting or filtering field as props.</li>
                            </ol>
                        </Typography>
                        <Typography variant='h5' className='callout'> !! problem !! </Typography>
                        <Typography variant='body1' className='section-desc'>
                            At this point, i thought the program would be complete, but i failed to consider the fact that the app would need to be able to track user interactions.
                            after some time struggling, i realized i needed to use the <b>state</b> system! I had fallen into the trap that many beginners fall into: i had only considered
                            the data that was static and did not consider the data that would change as a result of user interaction, since the functionality modeled by <b>components</b> cannot
                            track data in the same way that the objects they physically model (like a shopping cart) can.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>4. updating Data: State</Typography>
                        <Typography variant='body1' className='section-desc'>
                            after implementing the <b>props</b> system, i implemented the <b>state</b> system to transform my static page into a dynamic one. i learned state is used to manage data that changes as a result of user interaction.
                        </Typography>
                        <Typography variant='body1' className='section-desc'>
                            this is the initial state model i used for the app:
                            <ol>
                                <li>products: the <b>App</b> component initializes the state of the app by setting the <b>cart</b> state to an empty list, <b>cart total</b> to $0, and <b>product list</b> to the list of all products.</li>
                                <li>sorting and filtering (i): the <b>app</b> initializes states for tracking <b>sort</b> and <b>filter list</b> parameters to defaults: sort by popularity and no filters</li>
                                <li>sorting and filtering (ii): the <b>App</b> component also initializes the state of the <b>SortOpts</b> and <b>FilterOpts</b> components by passing the <b>sort</b> and <b>filter</b> states as props.</li>
                            </ol>
                            <br />
                            using app component methods passed to the child components, each component could update the state of the app as needed. the user could interact with different  buttons and form controls to call these state-altering methods.
                            <br />
                        </Typography>
                        <Typography variant='h5' className='callout'>!! problem !!</Typography>
                        <Typography variant='body1' className='section-desc'>
                            After thinking the app was complete, i discovered that the method i had implemented for returning sorting and filtering to defaults also returned the cart to an empty state, which was not the desired behavior.
                            in fact, it reset <b>all state data</b>, deleting all user interactions. i initially thought i had to restructure my model. i was simply resetting the entire web app!
                            <br />
                            <br />
                            however, after some research, i discovered that if i made the key props of the <b>sortopts</b> and <b>filteropts</b> components in the <b>app</b> component <b>depend on the app's state</b>,
                            then i could clear the state of the sorting and filtering options without clearing the state of the cart by updating this so-called <b>resetKey</b> state.
                            <br />
                            <br />
                            this was a very important lesson for me, as it taught me that i should not be afraid to change my model if it is not working, but that i should think critically about what degree of change is needed. i had to change my model to make it work!
                            i was super proud to have figured this out on my own, and i was able to implement the fix in a few minutes.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>5. Final Thoughts</Typography>
                        <Typography variant='body1' className='section-desc'>
                            i am very proud of the work i did on this project. i learned:
                            <ol>
                                <li>how to build a stateful web app from scratch with react.js, after working with static pages in html/css</li>
                                <li>how logically fluid frontend development is, which differs from the more mathematical logic i employ in data and ai/ml</li>
                                <li>that taking a careful, planned, researched approach when facing a new issue allows for quick problem resolution</li>
                                <li>that when taking on new challenges, i should not let myself be blinded by previous knowledge (e.g. static vs. stateful web dev)</li>
                            </ol>
                        </Typography> 
                        <Typography variant='body1' className='section-desc'>
                            giving how different i found the type of logic behind this app and my typical ai/ml programs to be, i'm intrigued to learn more about how large-scale
                            web-deployed data and ai/ml tools function. i know that there is a lot to be done in terms of optimizing the performance of these tools on the backend, and this has
                            left me wondering if the performance of these tools on the frontend is also a concern. i'm excited to learn more about this!
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            
        );

} export default DevelopmentSummary;