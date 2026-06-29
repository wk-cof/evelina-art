import { useState } from 'react';
import { Container, Typography, Dialog, Box, Grid } from '@mui/material';
import { useLanguage } from '../LanguageContext';

const images = [
  'Gemini_Generated_Image_dqtrs4dqtrs4dqtr.png',
  'Gemini_Generated_Image_ivy2ovivy2ovivy2.png',
  'Gemini_Generated_Image_kx0b2pkx0b2pkx0b.png',
  'Gemini_Generated_Image_qa4dn0qa4dn0qa4d.png',
  'Gemini_Generated_Image_y20k3uy20k3uy20k.png',
  'Gemini_Generated_Image_yj574eyj574eyj57.png',
  'Gemini_Generated_Image_z8m7ruz8m7ruz8m7.png',
];

export default function Gallery() {
  const { t } = useLanguage();
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <Container id="gallery" sx={{ py: 10 }}>
      <Typography variant="h3" align="center" gutterBottom>{t('gallery_title')}</Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        {t('gallery_desc')}
      </Typography>

      <Grid container spacing={3}>
        {images.map((src, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}${src}`}
              alt={`Artwork ${index}`}
              onClick={() => setOpenImg(src)}
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'transform 0.4s, box-shadow 0.4s',
                '&:hover': {
                  transform: 'scale(1.05) translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  zIndex: 10,
                  position: 'relative'
                }
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog 
        open={!!openImg} 
        onClose={() => setOpenImg(null)} 
        maxWidth="lg"
        slotProps={{
          paper: { sx: { background: 'transparent', boxShadow: 'none', overflow: 'hidden' } }
        }}
      >
        {openImg && (
          <img 
            src={`${import.meta.env.BASE_URL}${openImg}`} 
            alt="Enlarged artwork" 
            style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: 12, objectFit: 'contain' }} 
            onClick={() => setOpenImg(null)}
          />
        )}
      </Dialog>
    </Container>
  );
}
