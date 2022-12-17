import React from 'react';
import '../index.css';
import './bcup.css';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function BCUP(){
        
    return (
        <div className="bcup-summary">
            <Typography variant='h1' className='title'>bcup</Typography>
            <Typography variant='h2' className='subtitle'>breast cancer unbiased prediction</Typography>

            <Card className="section" raised={true}>
                <CardContent>
                    <Typography variant="h4" component="div" className="section-title">
                        this page is under construction. feel free to reach out via email or linkedin with questions!
                    </Typography>
                </CardContent>
                <CardMedia
                    className="section-image"
                    component="img"
                    height="100%"
                    width="scale-down"
                    image={process.env.PUBLIC_URL + '/assets/under-construction.png'}
                    alt="notice of page under construction"
                />
            </Card>
    </div>
    );

} export default BCUP;