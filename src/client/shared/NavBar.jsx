import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import grey from '@material-ui/core/colors/grey';
import auth0Client from '../auth/Auth'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
    }
  }

  handleMenuToggle = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  };

  handleMenuClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ menuOpen: false });
  };

  signOut = () => {
    auth0Client.signOut();
    this.props.history.replace('/');
  };


  render() {
    const { classes } = this.props;
    const { menuOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color={grey[50]}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              buttonRef={node => {
                this.anchorEl = node;
              }}
              aria-owns={menuOpen ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={this.handleMenuToggle}
            >
              <MenuIcon />
            </IconButton>
            <Popper open={menuOpen} anchorEl={this.anchorEl} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={this.handleMenuClose}>
                      <MenuList>
                        <MenuItem onClick={this.handleMenuClose} component={Link} to="/scantron">Score Test</MenuItem>
                        <MenuItem onClick={this.handleMenuClose} component={Link} to="/analytics">Analytics</MenuItem>
                        {/* <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem> */}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Typography variant="h6" color="inherit" className={classes.grow} component={Link} to="/">
              SAT WIZ
            </Typography>
            {
              !auth0Client.isAuthenticated() &&
              <Button color="inherit" onClick={auth0Client.signIn}>Login</Button>
            }
            {
              auth0Client.isAuthenticated() &&
              <div>
                <label>{auth0Client.getProfile().name}</label>
                <Button onClick={() => { this.signOut() }}>Sign Out</Button>
              </div>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}




const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    width: 100,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(NavBar));