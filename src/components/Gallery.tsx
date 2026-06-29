import { useState, useEffect } from 'react';
import { Container, Typography, Dialog, Box, Grid, Button } from '@mui/material';
import { useLanguage } from '../LanguageContext';

const baseImages = [
  'Gemini_Generated_Image_dqtrs4dqtrs4dqtr',
  'Gemini_Generated_Image_ivy2ovivy2ovivy2',
  'Gemini_Generated_Image_kx0b2pkx0b2pkx0b',
  'Gemini_Generated_Image_qa4dn0qa4dn0qa4d',
  'Gemini_Generated_Image_y20k3uy20k3uy20k',
  'Gemini_Generated_Image_yj574eyj574eyj57',
  'Gemini_Generated_Image_z8m7ruz8m7ruz8m7',
];

export default function Gallery() {
  const { t } = useLanguage();
  const [openImg, setOpenImg] = useState<string | null>(null);
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);
  const [forceHighRes, setForceHighRes] = useState(false);

  useEffect(() => {
    // Check network conditions using the Network Information API
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      if (connection.saveData || ['slow-2g', '2g', '3g'].includes(connection.effectiveType)) {
        setIsSlowNetwork(true);
      }
      
      const updateConnection = () => {
        if (connection.saveData || ['slow-2g', '2g', '3g'].includes(connection.effectiveType)) {
          setIsSlowNetwork(true);
        } else {
          setIsSlowNetwork(false);
        }
      };
      
      connection.addEventListener('change', updateConnection);
      return () => connection.removeEventListener('change', updateConnection);
    }
  }, []);

  const handleOpen = (baseName: string) => {
    setOpenImg(baseName);
    setForceHighRes(false);
  };

  return (
    <Container id="gallery" sx={{ py: 10 }}>
      <Typography variant="h3" align="center" gutterBottom>{t('gallery_title')}</Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        {t('gallery_desc')}
      </Typography>

      <Grid container spacing={3}>
        {baseImages.map((baseName, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}${baseName}_thumb.webp`}
              alt={`Artwork ${index}`}
              onClick={() => handleOpen(baseName)}
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
          paper: { sx: { background: 'transparent', boxShadow: 'none', overflow: 'hidden', textAlign: 'center' } }
        }}
      >
        {openImg && (
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <img 
              src={`${import.meta.env.BASE_URL}${openImg}_${(isSlowNetwork && !forceHighRes) ? 'thumb' : 'full'}.webp`} 
              alt="Enlarged artwork" 
              style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: 12, objectFit: 'contain', cursor: 'pointer' }} 
              onClick={() => setOpenImg(null)}
            />
            {isSlowNetwork && !forceHighRes && (
              <Box sx={{ position: 'absolute', bottom: 20, left: 0, width: '100%', display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setForceHighRes(true);
                  }}
                  sx={{ borderRadius: 8, pointerEvents: 'auto' }}
                >
                  {t('load_high_res')}
                </Button>
              </Box>
            )}
          </Box>
        )}
      </Dialog>
    </Container>
  );
}
