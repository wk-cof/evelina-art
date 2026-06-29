import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useLanguage } from '../LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    { title: t('srv_bday_title'), desc: t('srv_bday_desc') },
    { title: t('srv_school_title'), desc: t('srv_school_desc') },
    { title: t('srv_fair_title'), desc: t('srv_fair_desc') },
  ];

  return (
    <Container id="services" sx={{ py: 10 }}>
      <Typography variant="h3" align="center" gutterBottom>{t('services_title')}</Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {services.map((service, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>{service.title}</Typography>
                <Typography color="text.secondary">{service.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
