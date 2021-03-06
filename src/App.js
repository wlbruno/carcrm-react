import React from 'react';
import { Provider }  from 'react-redux'
import { store } from './store/store'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes'
import { Loading, Notify, Alert, Confirm } from './view/components'
import './global.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  props: {
    MuiTextField:{
      variant: 'outlined',
      fullWidth: true
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true
    }
  }
});

const App = () => (
  <Provider  store={store}>
    <ThemeProvider theme={theme}>
      <Confirm 
      />
      <Alert />
      <Notify />
      <Loading />
      <Routes />
    </ThemeProvider>
  </Provider>


 
)

export default App