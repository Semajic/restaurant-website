import './menu.css';
import '../../App.css'
import  Navbar from '../main-components/navbar';
import { Footer }  from '../main-components/footer';
import { Grid } from '@mui/material';

const Menu = () => {

    return (
        <div className="container" style={{ backgroundColor: '#121212' }}>
            <div className="navbar">
                <Navbar />
            </div>

            <Grid container spacing={2} alignItems="center" justifyContent="center" width="100%" height="90%" flexDirection="column">
                <div className="h3">
                    <span style={{ marginRight: '5%' }}>
                        {'{'}
                    </span>
                    <span>
                        Appetizers
                    </span>
                </div>
                <Grid container spacing={2} alignItems="center" justifyContent="center" flexDirection="row" width="80%">
                    <Grid size={6} display="flex" alignItems="center" justifyContent="center" padding="0 3%">
                        <div className="h4consolas">
                            Byte-Sized Bruschetta
                        </div>
                    </Grid>
                    <Grid size={6} display="flex" alignItems="center" justifyContent="center" padding="0 3%">
                        <div className="h4consolas">
                            Baked Brie with Fig Jam
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default Menu;