import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useHooks from "./hooks";
import "./styles.css";
import { HashLoader } from "react-spinners";
import { Fade } from "react-reveal";
import { CgSlack } from "react-icons/cg";
import { Redirect } from "react-router-dom";

const theme = createTheme();

export const SignIn = () => {
  const {
    password,
    setPassword,
    secondPassword,
    setSecondPassword,
    email,
    setEmail,
    logIn,
    isLogin,
    setIsLogin,
    isRegistering,
    setIsRegistering,
    register,
    isRegister,
    setIsRegister,
    setValidInfo,
    validInfo,
    loading,
    route,    
} = useHooks() 
  
  return (
    <>
      
      {route && <Redirect to="/chat" />}
      {loading ? (
        <>
        
          <div className="loader">
            <HashLoader loading={loading} color={"purple"} size={80} />
            <h3>Loading...</h3>
          </div>
        </>
      ) : (
        <>
        <div className="background"></div>
          <Fade up>
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
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "purple" }}></Avatar>
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
                    />

                    {isRegistering && (
                      <Fade up>
                        {" "}
                        <TextField
                          onChange={(e) => setSecondPassword(e.target.value)}
                          value={secondPassword}
                          margin="normal"
                          fullWidth
                          label="Re-type Password"
                          type="password"
                        />{" "}
                      </Fade>
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
                    {validInfo.emailIsEmpty && (
                      <span className="failed">Email is required</span>
                    )}
                    {validInfo.passwordIsEmpty && (
                      <span className="failed">Password is required</span>
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
                    sx={{ mt: 3, mb: 2, backgroundColor: "purple" }}
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
                <Typography
                  className="copyright"
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {"Copyright © "}
                  <span color="inherit">Avion School Slack App</span>{" "}
                  {new Date().getFullYear()}
                  {"."}
                </Typography>
              </Container>
            </ThemeProvider>
          </Fade>
        </>
      )}
    </>
  );
};

export default SignIn;
