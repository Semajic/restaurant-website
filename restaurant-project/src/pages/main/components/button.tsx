import './button.css'
import '../../../App.css'

interface ButtonProps {
    text: string
    onClick: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <div className="hover-underline" onClick={onClick}>
            <div className="h5">
                {text}
            </div>
        </div>
    );
};

export default Button