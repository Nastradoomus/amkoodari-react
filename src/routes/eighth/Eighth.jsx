import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import {
  Grid,
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Card,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';

import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/styles';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ColoredLog from '../../helpers/console';
import history from '../../helpers/history';

const styles = () => ({
  root: {
    maxWidth: '350px',
  },
});

class Eighth extends React.Component {
  static context = {
    router: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      redirect: null,
      password: 'password',
      remember: 'I will forget You!',
      checked: false,
      username: 'John Doe',
    };
  }

  componentDidMount() {
    console.info('✔ Eighth chapter mounted! 🎱');
  }

  handleChange = (e, type) => {
    const username = e.target.value;
    if (type === 'username') {
      setTimeout(() => {
        this.setState({ username });
      }, 300);
    } else ColoredLog(`🌋 ERROR! type is not set!`, 'red');
  };

  handleClick = (e, type) => {
    e.preventDefault();
    let { password, remember } = this.state;
    const { username, checked } = this.state;
    if (type === 'password') {
      password =
        password === 'password' ? (password = 'text') : (password = 'password');
      ColoredLog(`👍 Password field is: ${password}`, 'green');
      this.setState(() => {
        return { password };
      });
    } else if (type === 'login') {
      ColoredLog(`👍 Redirecting... 👉`, 'green');
      history.push('/eighth');
      setTimeout(() => {
        this.setState({ redirect: '/eighth/project' });
      }, 500);
    } else if (type === 'remember') {
      remember =
        remember === 'I will remember You!'
          ? (remember = 'I will forget You!')
          : (remember = 'I will remember You!');
      if (username === '') {
        ColoredLog(`👍 Roger that John Doe. ${remember}`, 'blue');
      } else ColoredLog(`👍 Roger that ${username}. ${remember}`, 'blue');
      this.setState({ remember, checked: !checked });
    } else ColoredLog(`🌋 ERROR! type is not set!`, 'red');
  };

  render() {
    const tac = {
      textAlign: 'center',
    };
    const cursor = {
      cursor: 'pointer',
    };
    const { redirect, password, checked } = this.state;

    if (redirect) {
      return <Redirect to={redirect} />;
    }
    const { classes } = this.props;
    return (
      <div className="eighth">
        <header style={tac}>
          <Typography gutterBottom variant="h2">
            Course Project
          </Typography>
          <Typography gutterBottom variant="h4" />
        </header>
        <Container style={tac}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" m={1} p={1}>
              <Box p={1}>
                <Card variant="outlined" className={classes.root}>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      Login
                    </Typography>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <FaceOutlinedIcon color="primary" />
                      </Grid>
                      <Grid item>
                        <TextField
                          label="Username"
                          onChange={(e) => this.handleChange(e, 'username')}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <LockOutlinedIcon color="primary" />
                      </Grid>
                      <Grid item>
                        <TextField label="Password" type={password} />
                      </Grid>
                      <Grid item>
                        <VisibilityOutlinedIcon
                          color="primary"
                          onClick={(e) => this.handleClick(e, 'password')}
                          style={cursor}
                        />
                      </Grid>
                    </Grid>
                    <Box pb={3} pt={3} pl={4}>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              name="check"
                              color="primary"
                              onClick={(e) => this.handleClick(e, 'remember')}
                            />
                          }
                          label="Remember me"
                        />
                      </FormGroup>
                    </Box>
                    <Box pb={3}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => this.handleClick(e, 'login')}
                      >
                        Login
                      </Button>
                    </Box>
                    <Box pb={3}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={(e) => this.handleClick(e, '')}
                      >
                        eRroR!
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Eighth);
