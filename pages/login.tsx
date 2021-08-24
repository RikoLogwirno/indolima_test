import React from "react";
import {
  Box,
  Button, 
  Container, 
  FormControl, 
  Grid, 
  Input, 
  InputLabel, 
  InputAdornment, 
  IconButton,
  Typography
} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

interface State {
  showPassword: boolean;
}

const Login: NextPage = () => {
  const [values, setValues] = React.useState<State>({
    showPassword: false
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <Grid container className="login-page">
      <Head>
        <title>Login | Skill test Indolima | Riko Logwirno</title>
        <meta name="description" content="Skill test Indolima | Riko Logwirno" />
      </Head>
      <Grid container justifyContent="center" alignItems="center">
        <Grid xl={6} md={9} sm={12}>
          <Box className="login-cont" boxShadow={3}>
            <Grid container direction="row" xs={12}>
              <Grid container item xs={5} className="img-ico-cont" direction="row" alignItems="center" justifyContent="center">
                <Box className="img-ico">
                  <Typography color="secondary" variant="h5">
                    Skill Test for Indonesia 5
                  </Typography>
                  <Image src="https://www.indonesia5.com/wp-content/uploads/2019/04/logo-2.png" alt="logo-indo5" width={300} height={100} />
                </Box>
              </Grid>
              <Grid container item direction="column" xs={7} spacing={4} className="login-form-cont">
                <Grid container item direction="column">
                  <FormControl margin="normal">
                    <Typography color="primary" variant="h4">
                      LOGIN
                    </Typography>
                  </FormControl>
                  <FormControl margin="normal">
                    <InputLabel htmlFor="email-input">Email</InputLabel>
                    <Input id="email-input" />
                  </FormControl>
                  <FormControl margin="normal">
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <Input
                      id="password-input"
                      type={values.showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={() => null}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid container item>
                  <Button color="primary" variant="contained">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login