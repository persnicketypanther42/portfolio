import React, { Component}  from 'react';
import './project.css';
import { Card, Typography, CardContent, CardActionArea, CardMedia } from '@mui/material';
import { Link } from "react-router-dom";

class Project extends Component {

    render() {
        return (
            <Card className="project-card">
                <CardActionArea component={Link} to={this.props.linkPath}>
                    <CardContent className="Card-header">
                        <Typography variant="h5" component="div">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2">
                            {this.props.desc}
                        </Typography>
                    </CardContent>
                    <CardMedia 
                        component="img"
                        height={200}
                        image={process.env.PUBLIC_URL + this.props.imgPath}
                        alt={this.props.imgAlt}
                    />
                </CardActionArea>
            </Card>
        );
    }
}

export default Project;