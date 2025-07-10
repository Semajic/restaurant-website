import '@fontsource/poppins/400.css';
import Typography from '@mui/material/Typography';
import './button.css'

interface ButtonProps {
    text: string
}

const Button = ({text}: ButtonProps) => {
    return (
        <button className="button">
            <Typography variant="h6" style={{ fontFamily: 'Poppins'}}>
                {text}
            </Typography>
        </button>
    );
};

export default Button