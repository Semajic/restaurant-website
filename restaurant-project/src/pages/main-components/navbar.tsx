import { Grid } from "@mui/material";
import Button from "../main/components/button";
import '../main/main.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const poppinsBold = { fontWeight: 800 };

const Navbar = () => {
    const navigate = useNavigate(); // Use the hook inside the component

    const handleButtonClick = (path: string) => {
        setTimeout(() => {
            navigate(path);
        }, 0);
    };

    return (
        <Grid container alignItems="center" width="100%" height="100%">
            <Grid size={6} display="flex" alignItems="center" justifyContent="flex-start" padding="0 3%">
                <div className="h3" style={{marginRight: '3%'}}>
                    {'{'}
                </div>
                <div className="h4" style={{...poppinsBold, cursor: 'pointer'}} onClick={() =>handleButtonClick('/')}>
                    <span style={{ color: 'white' }}>Studio</span>
                    <span style={{ color: '#7C3AED' }}> Null</span>
                </div>
            </Grid>
            <Grid size={6} display="flex" alignItems="center" justifyContent="flex-end" padding="0 3%">
                <div className="h3">
                    {'{'}
                </div>

                <Button text="Our Menu" onClick={() => handleButtonClick('/menu')} />
                <Button text="Gallery" onClick={() => handleButtonClick('/gallery')} />
                <Button text="Book a Table" onClick={() => handleButtonClick('/booking')} />
                <Button text="About Us" onClick={() => handleButtonClick('/about')} />

                <div className="h3">
                    {'}'}
                </div>
            </Grid>
        </Grid>
    );
}

export default Navbar