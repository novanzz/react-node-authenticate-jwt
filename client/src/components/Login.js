import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from 'material-ui-next/styles';
import Card, { CardActions, CardContent } from 'material-ui-next/Card';
import Button from 'material-ui-next/Button';
import Typography from 'material-ui-next/Typography';
import TextField from 'material-ui-next/TextField';


const styles = theme => ({
  card: {
    maxWidth:'70vh',
    minWidth:'50vh',
    marginTop:'12vh',
    margin:'auto',
    paddingBottom:'150px',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  
  btn: {
    margin:'auto',
    
  },
  cobaProps: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

const Login = (props)=> {
  console.log (props);
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>LOGIN</Typography>
          <TextField
            id="search"
            label="Username"
            type="placeholder"
            // className={classes.textField}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Link className={classes.btn} style={{}} to="/">
            <Button size="small">Login</Button>
          </Link>
          <Link className={classes.btn} to="/signup">
            <Button size="small" >Register</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
