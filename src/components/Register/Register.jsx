
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
// import { useContext } from 'react';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';
// import './Register.css'
// import { Button } from 'react-bootstrap';

const Register = () => {
    const defaultTheme = createTheme()
    // const handleGoogle = () => {
    //     googleSignUp()
    // }
    const handleSubmit = (event) => {
        event.preventDefault()


        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const pass = form.password.value;
        const confirmPass = form.confirmPassword.value;
        // console.log(firstName,lastName,email,pass, confirmPass)

        if (pass !== confirmPass) {
            alert('password didnt match')
            return;
        }

        createUser(email, pass)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => console.log(error.message))
    }
    return (

        <ThemeProvider theme={defaultTheme}>
            <Container className='w-fit mx-auto my-20 text-[#1976d2;] rounded-lg border border-orange-700  pb-10 bg-white' component="main" maxWidth="xs">
                {/* <CssBaseline /> */}

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar style={{ backgroundColor: '#1976d2' }} className='d-flex justify-content-center' sx={{ m: 1}}>
                        <FaLock />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Accept all our terms & conditions"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        {/* <div className='btn'>
                            <button onClick={handleGoogle}>Continue With Google</button>
                        </div> */}
                        <Grid container justifyContent="flex-start">
                            <Grid item>
                            Already have an account? <Link to="/login" className='underline'>Sign in</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

    );
};

export default Register;
