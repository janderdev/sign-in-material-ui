import { createTheme, ThemeProvider } from '@mui/material/styles'

import {  Grid } from '@mui/material'

import Image from './components/Image'
import SignIn from './components/SignIn'

function App() {
  const theme = createTheme()

  theme.typography.h3 = {
    fontSize: '1.25rem',
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh'}}>
        <Image />
        <SignIn />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
