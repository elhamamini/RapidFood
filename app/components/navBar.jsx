import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { connect } from 'react-redux';
import { logOutAttempt } from '../redux/authentication';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'grey',
  },
  home: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function MenuAppBar(props) {
  const classes = useStyles();
  console.log('mypropssss', props);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { authentication } = props;
  const { isLoggedIn } = authentication;

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup></FormGroup>
      <AppBar position="static" style={{ backgroundColor: '#bbab9b' }}>
        <Toolbar>
          <LocalDiningIcon />
          <Typography variant="h6" className={classes.title}>
            Rapid Food
          </Typography>
          <Link to="/" style={{ color: 'white' }}>
            <Typography
              variant="h6"
              className={classes.home}
              style={{ color: 'white' }}
            >
              Home
            </Typography>
          </Link>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {isLoggedIn === true ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/favorites">
                  <MenuItem onClick={handleClose}>Favorits</MenuItem>
                </Link>
                <Link to="/">
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      props.signout();
                    }}
                  >
                    sign out
                  </MenuItem>
                </Link>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/login">
                  <MenuItem onClick={handleClose}>Sign in</MenuItem>
                </Link>
                <Link to="/signup">
                  <MenuItem onClick={handleClose}>Sign up</MenuItem>
                </Link>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(logOutAttempt()),
});
const mapStateToProp = ({ authentication }) => ({ authentication });
export default connect(mapStateToProp, mapDispatchToProps)(MenuAppBar);
