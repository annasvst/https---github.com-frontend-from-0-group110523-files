import { createTheme } from '@mui/material/styles';
import { blueGrey, orange } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});