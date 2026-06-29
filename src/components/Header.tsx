import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLanguage } from '../LanguageContext';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: t('nav_gallery'), href: '#gallery' },
    { label: t('nav_services'), href: '#services' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 800, background: 'linear-gradient(90deg, #c026d3, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Evelina Art
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component="a" href={item.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
            <ListItemButton component="a" href="#contact" sx={{ textAlign: 'center' }}>
              <ListItemText primary={t('nav_book')} sx={{ color: '#c026d3' }} />
            </ListItemButton>
        </ListItem>
      </List>
      <Box sx={{ mt: 2 }}>
        <Button onClick={(e) => { e.stopPropagation(); setLanguage('ro'); }} sx={{ color: language === 'ro' ? '#f8fafc' : '#94a3b8' }}>RO</Button>
        <span style={{ color: '#94a3b8' }}>/</span>
        <Button onClick={(e) => { e.stopPropagation(); setLanguage('ru'); }} sx={{ color: language === 'ru' ? '#f8fafc' : '#94a3b8' }}>RU</Button>
      </Box>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', margin: '0 auto' }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: 800, background: 'linear-gradient(90deg, #c026d3, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Evelina Art
        </Typography>
        
        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 2 }}>
          {navItems.map((item) => (
            <Button key={item.label} href={item.href} sx={{ color: '#f8fafc' }}>
              {item.label}
            </Button>
          ))}
          <Button variant="contained" color="primary" href="#contact">
            {t('nav_book')}
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', px: 1 }}>
            <Button size="small" onClick={() => setLanguage('ro')} sx={{ minWidth: 'auto', px: 1, color: language === 'ro' ? '#f8fafc' : '#94a3b8' }}>RO</Button>
            <span style={{ color: '#94a3b8', opacity: 0.5 }}>/</span>
            <Button size="small" onClick={() => setLanguage('ru')} sx={{ minWidth: 'auto', px: 1, color: language === 'ru' ? '#f8fafc' : '#94a3b8' }}>RU</Button>
          </Box>
        </Box>

        {/* Mobile Nav Toggle */}
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      
      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, background: '#1e293b' } }}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
