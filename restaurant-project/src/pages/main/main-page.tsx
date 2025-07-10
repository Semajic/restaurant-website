import { Footer }  from './components/footer';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import './main.css';

import { Grid, Typography } from '@mui/material';

import Typewriter from 'typewriter-effect';
import Button from './components/button';

const poppinsBold = { fontFamily: 'Poppins', fontWeight: 800 };


const Main = () => (
    <div className="container">
        {/* Navbar */}
        <div className="navbar">
        <Grid container alignItems="center" width="100%" height="100%">
            <Grid size={6} display="flex" alignItems="center" justifyContent="flex-start" padding="0 3%">
            <div className="h3" style={{ marginRight: '3%' }}>{'{'}</div>
            <div className="h4" style={poppinsBold}>
                <span style={{ color: 'white' }}>Studio</span>
                <span style={{ color: '#7C3AED' }}> Null</span>
            </div>
            </Grid>
            <Grid size={6} display="flex" alignItems="center" justifyContent="flex-end" padding="0 3%">
            <div className="h3">{'{'}</div>
            <Button text="Our Menu" />
            <Button text="About Us" />
            <Button text="Contact Us" />
            <div className="h3">{'}'}</div>
            </Grid>
        </Grid>
        </div>

        {/* Typewriter */}
        <div className="typewriter">
            <Typography variant="h1" sx={{fontFamily: 'consolas', marginBottom: '7%'}}>
                <Typewriter
                options={{
                    strings: ['{Eat}', '[Code]', '(Share)'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </Typography>
        </div>
        
        
        {/* Footer */}
        <Footer />
    </div>
);

export default Main;
