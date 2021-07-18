import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  toolBar: {
    minHeight: '48px',
    backgroundColor: '#cf0a2c',
  },
  menuIcon: {
    color: '#fff',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolBar}>
        <Box mr={2}>
          <IconButton className={classes.menuIcon}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Typography className={classes.title}>METU GPA</Typography>
        <IconButton className={classes.menuIcon}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
