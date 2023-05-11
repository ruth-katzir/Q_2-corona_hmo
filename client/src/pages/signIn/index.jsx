import { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Downloader from './downloader';

const theme = createTheme();

export default function SignIn() {
  const [memberId, setMemberId] = useState([]);
  const [picture, setPicture] = useState(null);
  const [err, setErr] = useState(null);

  const handleLogin = async (e) => {
    try {
      console.log("in ", e);
      const res = await axios.get(`http://localhost:3600/api/member/${e}`)
      console.log(res.data);
      console.log(res.data.imgPath);
      setPicture(res.data.imgPath);
      setErr("created");
    } catch (err) {
      setErr(err.response?.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit ", event.currentTarget.id.value)
    setMemberId(event.currentTarget.id.value);
    handleLogin(event.currentTarget.id.value);
    //event.currentTarget.id.value
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">Sign in</Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField margin="normal" required fullWidth id="id" label="identity card" name="id" autoComplete="id" autoFocus />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>load member img</Button>
              {picture ? <Downloader filename={picture} /> : <></>}
              <Grid container>
                <Grid item>
                  <Link href="/signUp" variant="body2">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        {err && err}
      </Grid>
    </ThemeProvider>
  );
}
