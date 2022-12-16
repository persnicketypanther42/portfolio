import React from 'react';
import '../index.css';
import './redesignsummary.css';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Project from '../project-card/project';
import { pastProjectData } from '../landing/projectdata';

const hackernewsData = pastProjectData[0];

function HackerNewsSummary(){
        
    return (
            
            <div className='development-summary'>

                <Typography variant='h1' className='title'>responsive hackernews</Typography>
                <Typography variant='h2' className='subtitle'>making technical sources clean and accessible</Typography>

                <Project
                    className='project'
                    title='Responsive HackerNews: Live Link'
                    desc={hackernewsData.desc}
                    imgPath={hackernewsData.imgPath}
                    imgAlt={hackernewsData.imgAlt}
                    linkPath='/portfolio/hackernews-redesign/live'
                />

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>1. Motivation</Typography>
                        <Typography variant='body1' className='section-desc'>
                        With the web as one of the major frontiers and resources of our day, promoting accessibility is of utmost importance, particularly with the rise of the internet as a source of information. all too often, valuable sources maintained by technical experts are not accessible to the general public. as i am passionate about technology, communication, and accessibility as a disable computer scientist, i wanted to explore how we can make technical sources more accessible to the general public.
                        </Typography>
                        <br />
                        <Typography variant='body1' className='section-desc'>
                            in particular, i set out to redesign the <a href="https://news.ycombinator.com/">hackernews</a> portion of y combinator's website, iterating through the process of identifying usability and accessibility issues, prototypying, and redesigning to create an optimal product. 
                        </Typography>
                        <br />
                        <Typography variant='body1' className='section-desc'>
                            broadly, my approach was to first identify usability and accessibility issues with the current design, identify potential solutions, create high-fidelity prototypes at different resolutions, and code the prototype to create an actual website. The redesigned website is static, but nevertheless, it represents a step in the right direction toward a more accessible source for up-to-date tech news. You can find the live prototype <a href="/portfolio/hackernews-redesign/live">here</a>.
                            if you're interested in the process, read more down below!
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>2. identifying issues with usability and accessibility</Typography>
                        <Typography variant='body1' className='section-desc'>
                        I began this project by making detailed note of the usability and accessibility problems I saw with Hacker News, listed here:
                        <ol>
                            <li>Small text (usability, accessibility)</li>
                            <li>Low-contrast text (usability, accessibility)</li>
                            <li>Unintuitivefunctionality and system status for upvotes (learnability)</li>
                            <li>Unvote functionality is difficult to employ after vote functionality, as it appears in a different location (learnability)</li>
                            <li>Inconsistent language between number of comments and “discuss,” which appears when there are zero comments (learnability)</li>
                            <li>Clicking on the time posted directs to the discussion, which is not intuitive (learnability)</li>
                            <li>Search is located at the bottom of the page (learnability, usability)</li>
                            <li>Clicking the link to the right of a story title directs one to search for other articles from that source rather than directing to the story itself (learnability)</li>
                            <li>No ability to unhide hidden articles (usability)</li>
                            <li>Not obvious that many links are, in fact, links (learnability)</li>
                            <li>“More” (bottom of page) isn’t very clearly a link (usability, accessibility)</li>
                            <li>No clear way to navigate back to the previous page of posts (usability, accessibility)</li>
                            <li>Lack of label on search form (accessibility)</li>
                            <li>Lack of margin or another visual separator to discriminate between posts (usability)</li>
                            </ol>
                        </Typography>
                        <Typography>
                        After noting these problems, I also employed <a href="https://wave.webaim.org/">WAVE</a> to identify more acessibility issues. WAVE identified the same issues that I did, as well as a few additional ones. Some detected accessibility issues were not visible to the naked eye, such as having many empty links (could be bothersome for people using screen readers), images without alt text, use of layout tables (often don’t work w screen readers), lack of heading structure (no clear hierarchy for assistive tech users); this shows the disparity of web accessibility between people with disabilities and people who don’t. WAVE did note that the site's HTML had the language attribute set to English, which is a good start, as it helps those who use screen readers.
                        </Typography>
                    <Typography variant='h5' className="callout">webaim wave results highlight multitudinous issues</Typography>
                    </CardContent>
                    <CardMedia
                        className="Card-image"
                        component="img"
                        height="100%"
                        width="scale-down"
                        image={process.env.PUBLIC_URL + "/assets/Screen Shot 2022-12-16 at 5.48.40 PM.png"}
                        alt="webaim wave results display low accessivbility">
                    </CardMedia>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>3. addressing issues</Typography>
                        <Typography variant='body1' className='section-desc'>
                            i identified the following steps to improve hackernews:
                            <ol>
                                <li>Make top-level navigation collapse into a “hamburger”-style menu on smaller screens, making the UI more responsive (rather than clunky text wrapping)</li>
                                <li>add a search bar at the top of the page, making it easier to find articles on specific topics</li>
                                <li>add visual separation between menu/search and posts to differentiate functionality and make reading the site easier on the eyes</li>
                                <li>change article titles to better demonstrate they are hyperlinks</li>
                                <li>change display for upvote and comment buttons to make them analogous to other well-known UIs (YouTube, FaceBook, Instagram) and better reflect the state (has a user liked? Have they commented? Has anyone commented?</li>
                                <li>increase whitespace between post title/author and other post details, made all of these clearly links, and more clearly described functionality</li>
                                <li>keep a search bar at the bottom of the page as well but moved it up from the footer and made page navigation clearer than “More,” which was not even clearly a link.</li>
                                <li>remove links in footer on mobile that were irrelevant to the news portion of the site in order to fit it better and added “More” option to keep that information accessible, kept footer on other sizes the same. The prediction is that mobile users aren’t very interested in filling out applications or reading up on legal information, uses of the site that are more likely to occur on larger screens.</li>
                            </ol>
                        </Typography>
                        <Typography variant='body1' className='section-desc'>
                            i then went through the process of implementing these changes in high-fidelity wireframes on figma for mobile, tablet, and desktop. for consistency's sake, i first created a visual design style guide.
                        </Typography>
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

} export default HackerNewsSummary;