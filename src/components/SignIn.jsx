import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Checkbox, Container, FormControlLabel, Link, Stack, Select, FormControl, MenuItem } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { TextField } from '@mui/material'
import { Button, Grid } from '@mui/material'

import logoGoogle from "../assets/Google-Logo.svg"

export default function SignIn() {
    return (
        <Grid zIndex="100" item md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Container
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '100vh',
                    mt: '-2rem'
                }}
            >
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid #dadce0',
                        borderRadius: '0.4rem',
                        p: '2rem',
                    }}
                >

                    <img src={logoGoogle} height="64" />
                    <Typography component="h1" variant="h5" >
                        Sign in
                    </Typography>
                    <Typography component="p" sx={{ mt: 1 }} >
                        Use your Google Account
                    </Typography>

                    <Box component="form" sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />

                        <Stack direction="row" spacing={5}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                pt: '1rem',
                                pb: '1rem',
                            }}
                        >

                            <Button
                                variant="text"
                                sx={{
                                    textTransform: "none"
                                }}
                            >
                                Create account
                            </Button>

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    textTransform: "none"
                                }}
                            >
                                Sign In
                            </Button>

                        </Stack>

                        <Grid container sx={{ mt: '0.8rem', display: 'flex', alignItems: 'center' }}>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>

                            <Grid item>
                                <Link href="#" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>

                <Grid container sx={{ mt: '0.8rem' }}>
                    <Grid item xs>
                        <FormControl size='small' >

                            <Select
                                defaultValue={30}

                                sx={{ fontSize: '0.78rem' }}
                            >
                                <MenuItem value={10}>Español(España)</MenuItem>
                                <MenuItem value={20}>Português(Brasil)</MenuItem>
                                <MenuItem value={30}>English(United States)</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>

                    <Grid item sx={{ display: 'flex', gap: '1.5rem', color: '#000' }}>
                        <Link href="#" variant="body2" color="gray" component="button" underline="none" sx={{ fontSize: '0.78rem', fontWeight: 'medium' }}>
                            Help
                        </Link>
                        <Link href="#" variant="body2" color="gray" component="button" underline="none" sx={{ fontSize: '0.78rem', fontWeight: 'medium' }}>
                            Privacy
                        </Link>
                        <Link href="#" variant="body2" color="gray" component="button" underline="none" sx={{ fontSize: '0.78rem', fontWeight: 'medium' }}>
                            Terms
                        </Link>
                    </Grid>
                </Grid>

            </Container>

        </Grid>
    )
}