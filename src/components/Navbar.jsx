import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FunctionsIcon from '@material-ui/icons/FunctionsOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'transparent',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    border: '1px solid #d3d4d5',
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box display={{ xs: 'block', md: 'none' }}>
        <AppBar position="static" className={classes.appBar}>
          <IconButton
            aria-controls="menu"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Link
              className={classes.link}
              component={RouterLink}
              to="/"
              onClick={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <HomeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </MenuItem>
            </Link>
            <Link
              className={classes.link}
              component={RouterLink}
              to="/first"
              onClick={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <FunctionsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="State" />
              </MenuItem>
            </Link>
            <Link
              className={classes.link}
              component={RouterLink}
              to="/second"
              onClick={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <FunctionsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Context" />
              </MenuItem>
            </Link>
          </Menu>
        </AppBar>
      </Box>
      <Box display={{ xs: 'none', md: 'block' }}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Link component={RouterLink} to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link component={RouterLink} to="/first">
              <Button color="inherit">State</Button>
            </Link>
            <Link component={RouterLink} to="/second">
              <Button color="inherit">Context</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
