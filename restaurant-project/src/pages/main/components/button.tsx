import '@fontsource/poppins/400.css';
import Typography from '@mui/material/Typography';
import './button.css'

interface ButtonProps {
    text: string
    onClick: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button className="button" onClick={onClick}>
            <Typography variant="h6" style={{ fontFamily: 'Poppins'}}>
                {text}
            </Typography>
        </button>
    );
};

export default Button