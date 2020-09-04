import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  IconButton,
  Link,
  Box,
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core';
import FunctionsIcon from '@material-ui/icons/FunctionsOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SchoolIcon from '@material-ui/icons/SchoolOutlined';
import EmojiEvents from '@material-ui/icons/EmojiEventsOutlined';
import ViewArray from '@material-ui/icons/ViewArrayOutlined';
import MenuIcon from '@material-ui/icons/Menu';

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
                  <SchoolIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Context" />
              </MenuItem>
            </Link>
            <Link
              className={classes.link}
              component={RouterLink}
              to="/third"
              onClick={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <EmojiEvents fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Events" />
              </MenuItem>
            </Link>
            <Link
              className={classes.link}
              component={RouterLink}
              to="/fourth"
              onClick={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <ViewArray fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Map Arrays" />
              </MenuItem>
            </Link>
            <Link
              className={classes.link}
              component={RouterLink}
              to="/fifth"
              onClick={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <ViewArray fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Modify Arrays" />
              </MenuItem>
            </Link>
          </Menu>
        </AppBar>
      </Box>
      <Box display={{ xs: 'none', md: 'block' }}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Link component={RouterLink} to="/">
              <Button>Home</Button>
            </Link>
            <Link component={RouterLink} to="/first">
              <Button>State</Button>
            </Link>
            <Link component={RouterLink} to="/second">
              <Button>Context</Button>
            </Link>
            <Link component={RouterLink} to="/third">
              <Button>Third</Button>
            </Link>
            <Link component={RouterLink} to="/fourth">
              <Button>Fourth</Button>
            </Link>
            <Link component={RouterLink} to="/fifth">
              <Button>Fifth</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
