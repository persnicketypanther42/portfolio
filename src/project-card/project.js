import React, { Component}  from 'react';
import './project.css';
import { Card, Typography, CardContent, CardActionArea, CardMedia } from '@mui/material';
import { Link } from "react-router-dom";

class Project extends Component {

    render() {
        return (
            <Card className="project-card" raised={true}>
                <CardActionArea className="action-area" component={Link} to={this.props.linkPath}>
                    <CardContent className="Card-header"
                        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.54)' }}
                    >
                        <Typography variant="h5" component="div">
                            {this.props.title}
                        </Typography>
                        <Typography variant="p" sx={{textAlign: 'left', paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%'}}>
                            {this.props.desc}
                        </Typography>
                    </CardContent>
                    <CardMedia 
                        className="Card-image"
                        component="img"
                        height="100%"
                        image={process.env.PUBLIC_URL + this.props.imgPath}
                        alt={this.props.imgAlt}
                    />
                </CardActionArea>
            </Card>
        );
    }
}

export default Project;