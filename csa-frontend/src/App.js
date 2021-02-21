import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.jsx'
import 'fontsource-roboto';
// Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
   "fontFamily": '"Roboto"',
   "fontSize": 16,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  },
  breakpoints:{
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  },
});

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <MuiThemeProvider theme={THEME}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/Sambo-Academy-Ireland" component={Homepage} />
          </Switch>
        </BrowserRouter>
        </MuiThemeProvider>
    </div>
      
  );
}

export default App;
