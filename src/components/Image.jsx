import { Grid } from '@mui/material'
import { Container } from '@mui/material'

export default function Image() {
    return (
        //{backgroundImage: 'linear-gradient(to left, rgba(255,255,255, 1) 0%, rgba(255,255,255, 0) 100%)',}
      <>
        <Grid 
          zIndex='100'
          item
          md={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> 

    </>
  )
}