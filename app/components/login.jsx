import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { logInAttempt, removeLogInError } from '../redux/authentication';
// also need all the redux authentication stuff

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailHelper: '',
      emailErr: false,
      passHelper: '',
      passErr: false,
    };
  }

  componentDidUpdate() {
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
      if (value.length > 0 && this.validateEmail(value)) {
        this.setState({ emailHelper: '', emailErr: false });
      } else if (value.length === 0) {
        this.setState({ emailHelper: 'Email cannot be empty', emailErr: true });
      }
    }

    if (name === 'password') {
      if (value.length > 0) {
        this.setState({ passHelper: '', passHelper: false });
      } else {
        this.setState({
          passHelper: 'Password cannot be empty',
          passErr: true,
        });
      }
    }

    const {
      authentication: { logInError },
    } = this.props;
    if (logInError) {
      this.props.removeLogInError();
    }
  };

  validateEmail = email => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  onSubmit = ev => {
    ev.preventDefault();
    const { email, password } = this.state;
    if (this.validateEmail(email) === false) {
      this.setState({ emailHelper: 'Email must be valid', emailErr: true });
      return;
    } else {
      this.props.login({ email, password });
    }
  };

  logInError = () => {
    const {
      authentication: { logInError },
    } = this.props;
    if (logInError) {
      return <h4>Your email or password is incorrect</h4>;
    } else return null;
  };

  render() {
    return (
      <div
        style={{
          backgroundImage:
            'url("https://www.foodwise.com.au/wp-content/uploads/2012/08/Background_ChoppingBoard21.jpg")',
          height: '40rem',
          paddingTop: '5rem',
        }}
      >
        <Container
          component="div"
          maxWidth="sm"
          style={{
            marginTop: '5rem',
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO4EGX6Ijp39D1lt0eZOXWpbS7i7Nn2LvyFqfdJcMnjCFkqZYk")',
            // backgroundColor: 'lime',

            width: '20rem',
            height: '20rem',

            borderRadius: '10px',
            // backgroundColor:'#bbab9b'
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
            <form
              style={{
                width: '100%',
                padding: '1rem',
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                autoComplete="email"
                error={this.state.emailErr}
                helperText={this.state.emailHelper}
                onChange={this.handleChange}
                value={this.state.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                error={this.state.passErr}
                helperText={this.state.passHelper}
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                onClick={() => this.onSubmit(event)}
              >
                Log In
              </Button>
            </form>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              Need an account? Register!
            </Link>
            {this.logInError()}
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });

const mapDispatchToProps = dispatch => {
  return {
    login: info => dispatch(logInAttempt(info)),
    removeLogInError: () => dispatch(removeLogInError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
