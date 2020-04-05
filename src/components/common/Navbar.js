import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

  render() {
    return (
    <React.Fragment>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
        <Link to={`/`}>Breaking Bad</Link>
        </Typography>
      </Toolbar>
    </AppBar>
    </React.Fragment>
    )
  }

}

export default Navbar