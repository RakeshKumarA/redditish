import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import { mdiReddit } from '@mdi/js';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          justify="flex-start"
          alignItems="center"
          container
          direction="row"
        >
          <Grid item>
            <Icon path={mdiReddit} size={1.5} color="red" />
          </Grid>
          <Grid item>
            <Typography variant="h6">Redditish</Typography>
          </Grid>
        </Grid>
        <Grid justify="flex-end" alignItems="center" container direction="row">
          <div>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/signup">
              <Button color="inherit">Sign Up</Button>
            </Link>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
