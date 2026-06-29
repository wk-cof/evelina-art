import { Box } from '@mui/material';

export default function BackgroundBlobs() {
  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
      filter: 'blur(100px)',
      pointerEvents: 'none'
    }}>
      <Box sx={{
        position: 'absolute',
        borderRadius: '50%',
        opacity: 0.6,
        top: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, #c026d3 0%, transparent 70%)',
      }} />
      <Box sx={{
        position: 'absolute',
        borderRadius: '50%',
        opacity: 0.6,
        bottom: '-20%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
      }} />
      <Box sx={{
        position: 'absolute',
        borderRadius: '50%',
        opacity: 0.6,
        top: '40%',
        left: '40%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
      }} />
    </Box>
  );
}
