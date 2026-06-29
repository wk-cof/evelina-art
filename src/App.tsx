import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import BackgroundBlobs from './components/BackgroundBlobs';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <BackgroundBlobs />
        <Header />
        <Box component="main">
          <Hero />
          <Gallery />
          <Services />
          <Contact />
        </Box>
      </LanguageProvider>
    </ThemeProvider>
  );
}
