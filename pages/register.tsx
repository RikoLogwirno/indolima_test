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

const Register: NextPage = () => {
  const [values, setValues] = React.useState<State>({
    showPassword: false
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <Grid container className="login-page">
      <Head>
        <title>Register | Skill test Indolima | Riko Logwirno</title>
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
                      REGISTER
                    </Typography>
                  </FormControl>
                  <FormControl margin="normal">
                    <InputLabel htmlFor="fullname-input">Full Name</InputLabel>
                    <Input id="fullname-input" />
                  </FormControl>
                  <FormControl margin="normal">
                    <InputLabel htmlFor="address-input">Address</InputLabel>
                    <Input id="address-input" multiline={true} rows={2} />
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
                <Grid container item direction="row" justifyContent="space-between">
                  <Button color="primary" variant="contained">
                    Register
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

export default Register