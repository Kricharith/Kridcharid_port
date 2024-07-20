import React from "react";
import { Typography} from '@mui/material';
import { Security } from "@mui/icons-material";
const Footer = ()=>{
    return (
        <>
            <footer>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Contact jack12688jack@gmail.com
                </Typography>
            </footer>
        </>
    );
}
export default Footer;