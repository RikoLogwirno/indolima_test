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
  Typography,
  Link
} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import User from "../libs/user";
import Alert from "../components/Alert";

interface State {
  showPassword: boolean;
  loading: boolean;
  loginSuccess: boolean;
  datas: {
    email: string;
    password: string;
  }
}

const Login: NextPage = () => {
  const [values, setValues] = React.useState<State>({
    showPassword: false,
    loading: false,
    loginSuccess: false,
    datas: {
      email: "",
      password: "",
    }
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSubmit = async () => {
    setValues({ ...values, loading: true });
    try {
      await User.check(values.datas);
      setValues({ ...values, loginSuccess: true });
      setTimeout(() => Router.push('/'), 1500)
    } catch (error) {
      console.error(error);
      alert(error);
    }
    setValues({ ...values, loading: false });
  }

  return (
    <Grid container className="login-page">
      <Head>
        <title>Login | Skill test Indolima | Riko Logwirno</title>
        <meta name="description" content="Skill test Indolima | Riko Logwirno" />
      </Head>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xl={6} md={9} sm={12}>
          <Box className="login-cont" boxShadow={3}>
            <Grid container direction="row">
              <Grid container item sm={5} xs={12} className="img-ico-cont" direction="row" alignItems="center" justifyContent="center">
                <Box className="img-ico">
                  <Image src="https://www.indonesia5.com/wp-content/uploads/2019/04/logo-2.png" alt="logo-indo5" width={300} height={100} />
                  <Typography color="secondary" variant="h5">
                    Skill Test for Indonesia 5
                  </Typography>
                </Box>
              </Grid>
              <Grid container item direction="column" sm={7} xs={12} spacing={4} className="login-form-cont">
                <Grid container item direction="column">
                  <FormControl margin="normal">
                    <Typography color="primary" variant="h4">
                      LOGIN
                    </Typography>
                  </FormControl>
                  <FormControl margin="normal">
                    <InputLabel htmlFor="email-input">Email</InputLabel>
                    <Input
                      id="email-input"
                      onChange={(ev) => setValues({ ...values, datas: { ...values.datas, email: ev.target.value } })}
                    />
                  </FormControl>
                  <FormControl margin="normal">
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <Input
                      id="password-input"
                      type={values.showPassword ? 'text' : 'password'}
                      onChange={(ev) => setValues({ ...values, datas: { ...values.datas, password: ev.target.value }})}
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
                <Grid container item direction="row" justifyContent="space-between">
                  <Link href={`/register`}>
                    <Button color="secondary" variant="contained">
                      Register
                    </Button>
                  </Link>
                  <Button 
                    color="primary" 
                    variant="contained" 
                    disabled={values.loading} 
                    onClick={handleSubmit}
                  >
                    {values.loading ? "LOADING" : "LOGIN"}
                  </Button>
                </Grid>
                <Grid container item direction="row" justifyContent="space-between">
                  <Alert severity="success" show={values.loginSuccess}>Login Sukses</Alert>
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