import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import './main.css';
import '../../App.css';

import Typewriter from 'typewriter-effect';

const Main = () => {

    return (
        <div className="typewriter">
            <div style={{marginBottom: '7%'}}>
                <Typewriter
                    options={{
                        strings: ['{Eat}', '[Code]', '(Share)'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    );
}
export default Main;
