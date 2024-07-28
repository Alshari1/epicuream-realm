import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
// import React, { useContext } from 'react';
import { FaLock } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
// import './Login.css'
import { useContext, useState} from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const navigate = useNavigate();
    const { Signin, user } = useContext(AuthContext)
    const [err, setErr] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const defaultTheme = createTheme()
    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target;
        // console.log(form)
        const email = form.email.value;
        const pass = form.password.value;

        // box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        Signin(email, pass)
            .then(result => {
                const loggedUser = result.user;
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                  });
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setErr(error)
            })
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container
                className='w-fit mx-auto my-20 text-[#1976d2;] rounded-lg border border-orange-700  pb-10 bg-white' component="main" maxWidth="xs">
                {/* <CssBaseline /> */}
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar style={{ backgroundColor: '#1976d2' }} sx={{ m: 1 }}>
                        <FaLock />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {/* <Grid>{err}</Grid> */}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            style={{ color: 'white' }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            {/* <Grid item xs>
                                <Link to="" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid> */}
                                <Grid item xs>
                                    Don't Have an Account? Please <Link to="/register" className='underline'>Register</Link>
                                </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Login;