import * as React from "react";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import useHooks from "./hooks";
import "./styles.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Fade } from "react-reveal";

function Copyright(props) {
  const { Typography } = useHooks();

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <span color="inherit">Avion School Slack App</span>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const {
    post,
    users,
    password,
    setPassword,
    secondPassword,
    setSecondPassword,
    email,
    setEmail,
    logIn,
    getAllUsers,
    isLogin,
    setIsLogin,
    isRegistering,
    setIsRegistering,
    register,
    isRegister,
    setIsRegister,
    setValidInfo,
    validInfo,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Container,
    ThemeProvider,
    loading,
    PulseLoader,
    CgSlack,
    Typography,
  } = useHooks();

  console.log(post);
  return (
    <>
      {loading ? (
        <>
          <div className="loader" disabled>
            <PulseLoader loading={loading} color={"red"} size={40} />
            <p>Loading...</p>
          </div>
        </>
      ) : (
        <>
          <div className="heading-container">
            <span className="heading">
              <CgSlack />
              Avion Slack App
            </span>
            <span className="website">avionschool.slack.com</span>
          </div>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 25,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
                <Typography component="h1" variant="h5">
                  {isRegistering ? "Register " : "Sign in"}
                </Typography>
                <Box
                  component="form"
                  onClick={() => {
                    setIsLogin(false);
                    setIsRegister(false);
                    setValidInfo(false);
                  }}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    margin="normal"
                    fullWidth
                    label="Email Address"
                    required
                    type="text"
                    autoFocus
                  />

                  <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    margin="normal"
                    fullWidth
                    label="Password"
                    type="password"
                    required
                  />

                  {isRegistering && (
                    <TextField
                      onChange={(e) => setSecondPassword(e.target.value)}
                      value={secondPassword}
                      margin="normal"
                      fullWidth
                      label="Re-type Password"
                      type="password"
                      required
                    />
                  )}
                  {isLogin.successful && (
                    <span className="success">Log in Success!</span>
                  )}
                  {isLogin.failed && (
                    <span className="failed">Invalid email or password</span>
                  )}
                  {isRegister.successful && (
                    <span className="success">Registration Success!</span>
                  )}
                  {isRegister.failed && (
                    <span className="failed">Email already taken</span>
                  )}
                  {validInfo.invalidEmailFormat && (
                    <span className="failed">Invalid email format</span>
                  )}
                  {validInfo.passwordsDoNotMatch && (
                    <span className="failed">Passwords do not match</span>
                  )}
                </Box>

                <Button
                  onClick={(e) => {
                    isRegistering ? register(e) : logIn(e);
                  }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {isRegistering ? "Sign up" : "Sign In"}
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsRegistering(!isRegistering)}
                      variant="body2"
                    >
                      {isRegistering
                        ? "Already have an account? Sign in"
                        : "Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
          </ThemeProvider>
        </>
      )}
    </>
  );
}
