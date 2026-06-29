import { Box, Typography, Button, Container } from '@mui/material';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <Container id="hero" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 10 }}>
      <Box sx={{
        textAlign: 'center',
        background: 'rgba(30, 41, 59, 0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 6,
        p: { xs: 3, md: 6 },
        maxWidth: 800,
        boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
      }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{
          background: 'linear-gradient(to right, #fff, #a5b4fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }
        }}>
          {t('hero_title')}
        </Typography>
        <Typography variant="h6" color="text.secondary" component="p" sx={{ mb: 4, fontWeight: 300 }}>
          {t('hero_desc')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button variant="outlined" color="secondary" size="large" href="#gallery">
            {t('btn_view_work')}
          </Button>
          <Button variant="contained" color="primary" size="large" href="#contact">
            {t('btn_hire_me')}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
