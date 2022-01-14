import { makeStyles } from '@material-ui/core';

const drawerWidth = 100;

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },

    // Appbar
    appbar: {
      width: `calc(100% - ${drawerWidth}px) !important`,
    },

    // Navbar
    drawer: {
      width: drawerWidth,
    },
    drawerList: {
      width: drawerWidth,
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.dark
    },

    component: {
      width: '100%'
    },
    offset: theme.mixins.toolbar,
    page: {
      backgroundColor: '#f7f7f7',
      padding: theme.spacing(2),
    },

  };
});
