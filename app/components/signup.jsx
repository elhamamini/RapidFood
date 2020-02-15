import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  CssBaseline,
  TextField,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { createUser } from '../redux/users';
import { logInAttempt } from '../redux/authentication';
import { SignUpAttempt } from '../redux/authentication';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      //validation handling
      nameHelper: '',
      nameErr: false,
      emailHelper: '',
      emailErr: false,
      passwordHelper: '',
      passwordErr: false,
    };
  }

  componentDidMount() {
    const {
      authentication: { isLoggedIn },
    } = this.props;
    if (isLoggedIn) this.props.history.push('/');
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });

    if (name === 'email') {
      if (value.length > 0) this.setState({ emailHelper: '', emailErr: false });
      else
        this.setState({
          emailHelper: 'Email cannot be empty',
          emailErr: true,
        });
    }
    if (name === 'name') {
      if (value.length > 0) this.setState({ nameHelper: '', nameErr: false });
      else
        this.setState({
          nameHelper: 'Name cannot be empty',
          nameErr: true,
        });
    }

    if (name === 'password') {
      if (value.length > 0)
        this.setState({ passwordHelper: '', passwordErr: false });
      else
        this.setState({
          passwordHelper: 'Password cannot be empty',
          passwordErr: true,
        });
    }
  };

  onSubmit = ev => {
    const { nameErr, emailErr, passwordErr, email, password } = this.state;
    ev.preventDefault();
    this.props.createUser({
      ...this.state,
      // thunk this.state...
      // deal with not passing shippingIsBilling
    });

    if (!nameErr && !emailErr && !passwordErr) {
      this.props.login({ email, password });
      this.props.history.push('/');
    }
  };

  generateTextFields = (id, label, err, helper, inputProps) => {
    return (
      <TextField
        inputProps={inputProps || ''}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        onChange={this.handleChange}
        id={id}
        name={id}
        label={label}
        error={this.state[err] || null}
        helperText={this.state[helper] || null}
        value={this.state[id]}
      />
    );
  };

  // handle errors

  render() {
    const { generateTextFields } = this;
    return (
      <div
        style={{
          backgroundColor: 'lightGrey',
          height: '40rem',
          paddingTop: '5rem',
        }}
      >
        <Container
          component="div"
          maxWidth="sm"
          style={{
            marginTop: '3rem',
            backgroundColor: 'lightPink',
            width: '30rem',
            height: '30rem',
          }}
        >
          <CssBaseline />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" color="textSecondary" align="center">
              Sign up
            </Typography>
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                with: '100%',
                padding: '1rem',
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {generateTextFields('name', 'Name', 'nameErr', 'nameHelper')}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {generateTextFields(
                    'email',
                    'Email',
                    'emailErr',
                    'emailHelper'
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="none"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    label="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                type="submit"
                style={{
                  marginTop: '6px',
                  width: '7rem',
                  marginLeft: '9rem',
                }}
                onClick={() => this.onSubmit(event)}
              >
                Sign up
              </Button>
              <Grid container justify="flex-end" style={{ margin: '6px' }}>
                <Grid item>
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    Do you have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });
const mapDispatchToProps = dispatch => {
  return {
    createUser: user => dispatch(createUser(user)),
    login: user => dispatch(logInAttempt(user)),
    signup: user => dispatch(SignUpAttempt(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
