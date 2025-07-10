import '@fontsource/poppins/400.css';
import Typography from '@mui/material/Typography';

interface ButtonProps {
    text: string
}

const Button = ({text}: ButtonProps) => {
    return (
        <button className="button" style={{ backgroundColor: 'transparent', margin: '10px' }}>
            <Typography variant="h6" style={{ fontFamily: 'Poppins'}}>
                {text}
            </Typography>
        </button>
    );
};

export default Button