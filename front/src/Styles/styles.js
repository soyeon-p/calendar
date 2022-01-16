import { makeStyles } from '@material-ui/core';

const drawerWidth = 100;
const cardWidth = 200;

export const dataColor = {
  purple: '#814BA6',
  green: '#a5d6a7',
  blue: '#035AA6',
  orange: '#FE762D',
  red: '#f44336',
};

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
      color: theme.palette.primary.dark,
    },

    component: {
      width: '100%',
    },
    offset: theme.mixins.toolbar,
    page: {
      backgroundColor: '#f7f7f7',
      padding: theme.spacing(2),
    },

    // component
    box: {
      border: `1px solid #D9D9D9`,
      padding: '10px',
      borderRadius: '10px',
      marginBottom: theme.spacing(3),
    },

    filter: {
      display: 'flex',
      alignItems: 'center',
    },

    formControl: {
      width: 300,
      marginRight: `${theme.spacing(3)}px !important`,
    },

    card: {
      maxWidth: cardWidth,
    },

    radioGroup: {
      width: 100,
    },

    resetButton: {
      height: '100%',
    },
  };
});
