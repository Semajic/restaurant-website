import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import Grid from '@mui/material/Grid';

const iconStyle = { fontSize: 30, margin: 10 };
const grayText = { fontFamily: 'consolas', color: 'darkgray', marginBottom: '2.5%' };
const underlineText = { textDecoration: 'underline' };

export function Footer(){
    return (
        <Grid container alignItems="center" justifyContent="center" width="100%" height="100%">

        {/* Contact Info */}
            <Grid size={4} display="flex" flexDirection="column">
                <div className="h4" style={{marginBottom: '2.5%'}}>
                    Contact Information
                </div>
                <div className="h5" style={grayText}>
                    {"<"}123 Demo Street{">"} <br />
                    {"<"}New York, NY 12345{">"}
                </div>
                <div className="h5" style={underlineText}>
                    email@example.com <br />
                    (555) 555-5555
                </div>
            </Grid>

        {/* Center Logo + Icons */}
            <Grid size={4} display="flex" flexDirection="column" alignItems="center">
                <div className="h2">
                    <span style={{ color: 'white' }}>Studio</span>
                    <span style={{ color: '#7C3AED' }}> Null</span>
                </div>
                <Grid container justifyContent="center">
                    {[InstagramIcon, FacebookIcon, XIcon].map((Icon, idx) => <Grid size={3} key={idx} display="flex" justifyContent="center" alignItems="center">
                        <Icon style={iconStyle} />
                    </Grid>)}
                </Grid>
            </Grid>

        {/* Hours */}
            <Grid size={4} display="flex" flexDirection="column">
                <div className="h4" style={{marginBottom: '2.5%'}}>
                    Hours
                </div>
                <div className="h5" style={grayText}>
                    {"<"}Mon–Wed 6 – 11pm{">"}<br />
                    {"<"}Thu–Sat 4 – 12pm{">"} <br />
                    {"<"}Sun 3 – 10pm{">"}
                </div>
                <div className="h5" style={underlineText}>
                    Make a Reservation
                </div>
            </Grid>
        </Grid>
    );
}

export default Footer;
  