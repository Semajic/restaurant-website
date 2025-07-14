// CSS
import './gallery.css';
import '../../App.css'

// Components
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const galleryImages = [
    { src: '/src/assets/img1.png', alt: 'Image 1' },
    { src: '/src/assets/img2.png', alt: 'Image 2' },
    { src: '/src/assets/img3.png', alt: 'Image 3' },
    { src: '/src/assets/img4.png', alt: 'Image 4' },
    { src: '/src/assets/img5.png', alt: 'Image 5' },
    { src: '/src/assets/img6.png', alt: 'Image 6' },
    { src: '/src/assets/img7.png', alt: 'Image 7' },
    { src: '/src/assets/img8.png', alt: 'Image 8' },
]

const Gallery = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Grid container alignItems="center" justifyContent="center" width="100%" height="90%">
                <div style={{ width: '90%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <ImageList cols={3} gap={0} className="image-list">
                        {galleryImages.map((image) => (
                            <ImageListItem key={image.src} sx={{ padding: 4 }} onClick={() => window.open(image.src, '_blank')}>
                                <img
                                    src={`${image.src}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${image.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="image"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </Grid>
        </div>
    );
}

export default Gallery