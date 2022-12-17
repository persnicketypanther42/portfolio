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
                        With the web as one of the major frontiers and resources of our day, promoting accessibility is of utmost importance, particularly with the rise of the internet as a source of information. all too often, valuable sources maintained by technical experts are not accessible to the general public. as i am passionate about technology, communication, and accessibility as a disabled computer scientist, i wanted to explore how we can make technical sources more easily understandable and accessible.
                        </Typography>
                        <br />
                        <Typography variant='body1' className='section-desc'>
                        when i came to this idea, i almost immediately thought of hackernews <a href="https://news.ycombinator.com/">hackernews</a>, the news portion of y combinator's website, as it is a site i frequent. iterating through the process of identifying usability and accessibility issues, prototypying, and redesigning, i made important steps toward an optimal product. 
                        </Typography>
                        <br />
                        <Typography variant='body1' className='section-desc'>
                            broadly, my approach was to first identify usability and accessibility issues with the current design, identify potential solutions, create high-fidelity prototypes at different resolutions, and code the prototype to create an actual website. The redesigned website is static, but nevertheless, it represents a step in the right direction toward a more accessible source for up-to-date tech news. You can find the live prototype <a href="/portfolio/hackernews-redesign/live">here</a>.
                            as i delved into the site, i found more and more concerning issues--especially for a site that champions technology--so i highly recommend you read along; there is a lot to be said for the implications of the current design.
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
                        After noting these problems, I also employed <a href="https://wave.webaim.org/">webaim WAVE</a> to identify accessibility-specific issues. WAVE identified the same issues that I did, as well as a few additional ones. Some detected accessibility issues were not visible to the naked eye, such as having many empty links (could be bothersome for people using screen readers), images without alt text, use of layout tables (which don’t work with screen readers), a complete lack of heading structure (no clear hierarchy for assistive tech users); this shows the disparity of web accessibility between people with disabilities and people who don’t. WAVE noted  the site's HTML language attribute is set to English as a good start; however, this measure is likely largely ineffective since the page lacks the logical structure needed for screen-reader function.
                        </Typography>
                    <Typography variant='h5' className="callout">webaim wave results highlight many issues</Typography>
                    </CardContent>
                    <CardMedia
                        className="Card-image-app"
                        component="img"
                        height="100%"
                        width="scale-down"
                        image={process.env.PUBLIC_URL + "/assets/Screen Shot 2022-12-16 at 5.48.40 PM.png"}
                        alt="webaim wave results display low accessivbility">
                    </CardMedia>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>3. high-fidelity prototyping</Typography>
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
                        <Typography variant='h5' className='callout'>style guide</Typography>
                        <CardMedia
                            className="Card-image-app-app"
                            component="img"
                            image={process.env.PUBLIC_URL + "/assets/style-guide.png"}
                            alt="redesign visual style guide">
                        </CardMedia>
                        <div className='mobile'>
                            <Typography variant='h5' className='callout'>mobile layout</Typography>
                            <CardMedia
                                className="phone"
                                component="img"
                                image={process.env.PUBLIC_URL + "/assets/phone.png"}
                                alt="redesigned mobile layout">
                            </CardMedia>
                            <Typography variant='h5' className='callout'>tablet layout</Typography>
                            <CardMedia
                                className="tablet"
                                component="img"
                                image={process.env.PUBLIC_URL + "/assets/tablet.png"}
                                alt="redesigned tablet layout">
                            </CardMedia>
                        </div>
                        <Typography variant='h5' className='callout'>desktop layout</Typography>
                        <CardMedia
                            component="img"
                            image={process.env.PUBLIC_URL + "/assets/image.png"}
                            alt="redesigned desktop layout">
                        </CardMedia>
                    </CardContent>
                </Card>
                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>4. static redesign</Typography>
                        <Typography variant='body1' className='section-desc'>
                            after prototyping, i developed a fledgling, static redesign of the hackernews website, quite accurate to my initial sketches. while not dynamic, this static version of the site is a good starting point for redesign. it addresses key feature updates that ought to take place, such as:
                            <ol>
                                <li>a lack of pagination or heading structure (effectively making this site completely inaccessible to users of screenreaders)</li> 
                                <li>the lack of a well-indicated search bar</li>
                                <li>unintuitive interaction features (upvoting, downvoting, hiding, and commenting)</li>
                                <li>extremely lacking visual contrast</li>
                            </ol>
                        These issues inevitably make for a poor user experience for countless users. for some users of assistive technology, it is likely completely impossible to use this site in any effective capacity; the redesign addresses these core issues.
                        Particularly, by giving the page a hierarchy were none exister before, my redesign took a site once completely untenable for use with assistive technology ande made it, at the very least, now usable for many users.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='section'>
                    <CardContent>
                        <Typography variant='h4' className='section-title'>5. Final Thoughts</Typography>
                        <Typography variant='body1' className='section-desc'>
                            this project was a great learning experience for me; prior to this project, i had never designed a web-based application, let alone a responsive one. i gained a great appreciation for the designers whose work allows for seamless user experiences across a variety of devices and screen sizes. 
                            that being said, my greatest takeaway from this projet was the importance of accessibility, in particular as someone who has multiple disabilities myself. especially in the context of the web and even further in the context of a site with a large userbase that is made by and for the tech community,
                            it is extremely disheartening to see sites like Hackernews that are so poorly suited for accessibility. frankly, it is disgraceful; this website represents a resource for users to find jobs in startups, teach other important skills, and learn about the latest in tech. it is a resource that is used by many people, and it is important that it be accessible to all. 
                            
                            i hope that this project will serve as a reminder to myself and others to consider accessibility in all of our own work. intelligent design practices and accessible design practices are one and the same, and it is important to remember that.

                        </Typography> 
                    </CardContent>
                </Card>
            </div>
            
        );

} export default HackerNewsSummary;