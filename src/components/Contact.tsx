import { Container, Typography, Card, CardContent, Box, Link } from '@mui/material';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Container id="contact" sx={{ py: 10 }}>
      <Card sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
        <CardContent sx={{ p: { xs: 4, md: 6 } }}>
          <Typography variant="h3" gutterBottom>{t('contact_title')}</Typography>
          <Typography color="text.secondary" component="p" sx={{ mb: 2 }}>
            {t('contact_desc')}
          </Typography>
          
          <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', gap: 2, fontSize: '1.1rem' }}>
            <Typography>
              {t('lbl_phone')}
              <Link href="tel:+37300000000" color="secondary" sx={{ fontWeight: 600, textDecoration: 'none' }}>+373 XX XXX XXX</Link>
            </Typography>
            <Typography>
              ✉️ Email:{' '}
              <Link href="mailto:contact@evelinaart.md" color="secondary" sx={{ fontWeight: 600, textDecoration: 'none' }}>contact@evelinaart.md</Link>
            </Typography>
            <Typography>{t('lbl_location')}</Typography>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            {t('contact_note')}
          </Typography>
        </CardContent>
      </Card>
      <Typography align="center" color="text.secondary" sx={{ mt: 8 }}>
        &copy; 2026 Evelina Art. {t('footer_rights')}
      </Typography>
    </Container>
  );
}
