import '@fontsource/poppins/400.css';
import './main.css';
import Button from './components/button';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';

const Main = () => {
    return (
        <div className="container">
            <div className="navbar">
                <Grid container width="100%" height="100%" alignItems="center">
                    <Grid size={6} display="flex" justifyContent="flex-start" padding="0 3%" alignItems='center' flexDirection="row">
                        <Typography variant="h2" style={{ fontFamily: 'courier'}}>
                            {'{'}
                        </Typography>
                        <Typography variant="h4" style={{ fontFamily: 'Poppins'}}>
                            Studio Null
                        </Typography>
                    </Grid>

                    <Grid size={6} display="flex" justifyContent="flex-end" padding="0 3%" alignItems='center'>
                        <Typography variant="h2" style={{ fontFamily: 'courier'}}>
                            {'{'}
                        </Typography>

                        <Button text="Our Menu" />
                        <Button text="About Us" />
                        <Button text="Contact Us" />

                        <Typography variant="h2" style={{ fontFamily: 'courier'}}>
                            {'}'}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        
        
            <div className="typewriter">
                <Typography variant="h1" style={{ fontFamily: 'Poppins'}}>
                    <Typewriter
                        options={{
                            strings: ['Eat', 'Code', 'Share'],
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Eat').pauseFor(1000).deleteAll().typeString('Code').pauseFor(1000).deleteAll().typeString('Share').start();
                        }}
                    />
                </Typography>
            </div>
        </div>
    );
};

export default Main;
