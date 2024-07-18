import AppRoutes from './routes/AppRoutes'
import { Container, CssBaseline, Typography, AppBar, Toolbar, Box, Paper } from '@mui/material'

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <AppRoutes />
        </Paper>
      </Container>
    </Box>
  );
}

export default App
