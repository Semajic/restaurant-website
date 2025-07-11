import './menu.css';
import '../../App.css'
import  Navbar from '../main-components/navbar';
import { Footer }  from '../main-components/footer';
import { Grid } from '@mui/material';

const Menu = () => {

    return (
        <div className="container">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="menu-container">
                <div className="h3">
                    <span style={{ marginRight: '15%' }}>
                        {'{'}
                    </span>
                    <span>
                        Appetizers
                    </span>
                </div>
                <Grid container spacing={2} alignItems="center" justifyContent="center" flexDirection="row" width="80%">
                    <Grid size={6} display="flex" alignItems="center" justifyContent="center" padding="0 3%">
                        <div className="h5consolas">
                            Byte-Sized Bruschetta
                        </div>
                    </Grid>
                    <Grid size={6} display="flex" alignItems="center" justifyContent="center" padding="0 3%">
                        <div className="h5consolas">
                            RAM Tartare
                        </div>
                    </Grid>
                    <Grid size={6} display="flex" alignItems="center" justifyContent="center" padding="0 3%">
                        <div className="h5consolas">
                            Null Pointer Soup
                        </div>
                    </Grid>
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