import React, { Component } from 'react'
import { Typography } from '@mui/material'
import './footer.css'

const logo = '< name surname / >';
class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <Typography variant="body2" color="text.secondary" align="center">
                coming to you with lots of love from providence, ri.
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                {logo} © 2022
                </Typography>
            </div>
        );
    }
}

export default Footer;