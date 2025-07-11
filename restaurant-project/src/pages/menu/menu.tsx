import './menu.css';
import '../../App.css'
import  Navbar from '../main-components/navbar';
import { Footer }  from '../main-components/footer';
import { Grid } from '@mui/material';

const Menu = () => {
    const appetizers = [
        "<Byte-Sized Bruschetta> \n Heirloom tomatoes, basil chiffonade, balsamic reduction on garlic-rubbed toast",
        "<RAM Tartare>",
        "<Null Pointer Soup>",
    ];

    const entrees = [
        "<C++ Curry>",
        "<Java Jambalaya>",
        "<Python Paella>",
    ];

    return (
        <div className="container">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="menu-container">
                <div className="h3" style={{marginBottom: '2.5%'}}>
                    Appetizers
                </div>
                <Grid container spacing={2} alignItems="center" justifyContent="center" flexDirection="row" width="80%">
                    {appetizers.map((item, index) => (
                        <Grid key={index} size={6} display="flex" alignItems="center" justifyContent="center" padding="0 3%">
                            <div className="h5consolas">
                                {item}
                            </div>
                        </Grid>
                    ))}
                    {/* Empty grid item to maintain layout if needed */}
                    <Grid size={6} display="flex" alignItems="center" justifyContent="center" padding="0 3%"/>
                </Grid>

                <div className="h3" style={{marginBottom: '2.5%'}}>
                    Entrees
                </div>

                <Grid container spacing={2} alignItems="center" justifyContent="center" flexDirection="row" width="80%">
                    {entrees.map((item, index) => (
                        <Grid key={index} size={6} display="flex" alignItems="center" justifyContent="center" padding="0 3%">
                            <div className="h5consolas">
                                {item}
                            </div>
                        </Grid>
                    ))}
                    <Grid size={6} display="flex" alignItems="center" justifyContent="center" padding="0 3%"/>
                </Grid>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default Menu;
