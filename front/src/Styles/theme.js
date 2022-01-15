import { createTheme } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

export const theme = createTheme({
  overrides: {
    MuiContainer: {
      root: {
        display: 'flex',
        flexDirection: 'column',
      },
    },

    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },

    MuiFormGroup: {
      root: {
        display: 'block',
      },
    },

    MuiRadio: {
      root: {
        color: indigo[100],
      },
      colorSecondary: {
        '&$checked': {
          color: indigo[200],
        },
      },
    },

    MuiFormLabel: {
      root: {
        color: indigo[100],
        '&$focused': {
          color: indigo[200],
        },
      },
    },

  },
});
