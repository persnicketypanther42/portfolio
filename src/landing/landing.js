import React, { Component } from 'react';
import './landing.css';
import Project from '../project-card/project';
import { underConstructionProjectData, pastProjectData } from './projectdata';

class Landing extends Component {

    renderDescription = () => {
        return (
            <div className='description'>
                <h1 className='animated-landing-heading'>hey there, i'm \name\!</h1>
                <p className='intro-text'>i'm a computer science, applied math, and pure math student @ brown university.
                i'm also an incoming ai/ml research assistant @ mit lincoln laboratory (winter/spring '23) and
                data engineering intern @ boeing (summer '23). as a passionate scientist and storyteller, i have been polishing
                my skills in developing simple and effective interfaces, with the intent of abstracting these skills to
                my intended field of ai/ml and data engineering - on a large scale, any model or data we have is only as
                valuable as it is simple, understandable and accessible for new and/or inexperienced users. please, take a look around!</p>
                {/* <p className='edu-text'>computer science, applied math, and pure math student @ brown university</p>
                <p className='research-text'>incoming ai/ml research assistant @ mit lincoln laboratory (winter/spring '23)</p>
                <p className='intern-text'>incoming data engineering intern @ boeing (summer '23)</p> */}
            </div>
        );
    }

    renderProjects = () => {
        return (<div className='projects' id='projects'>
                    <h2 className='projects-header'>selected projects</h2>
                    <div className='projects-list'>
                        {pastProjectData.map((project) => <Project title={project.title}
                                                                    linkPath={project.linkPath}
                                                                    imgPath={project.imgPath} 
                                                                    imgAlt={project.imgAlt}
                                                                    desc={project.desc}
                                                                    key={project.title}
                        />)}
                    </div>
                    
                    <h2 className='projects-header'>under construction</h2>
                    <div className='projects-list'>
                        {underConstructionProjectData.map((project) => <Project title={project.title}
                                                                                linkPath={project.linkPath}
                                                                                imgPath={project.imgPath}
                                                                                imgAlt={project.imgAlt}
                                                                                desc={project.desc}
                                                                                key={project.title}
                        />)}
                    </div>
                </div>);
    }

    render() {
        const description = this.renderDescription();
        const projects = this.renderProjects();

        return (
            <div className='landing'>
                {description}
                {projects}
            </div>);
    }
}

export default Landing;