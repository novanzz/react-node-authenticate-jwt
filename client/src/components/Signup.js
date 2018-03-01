import React, { Component } from 'react';
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

class Signup extends Component{

  constructor(props){
    super(props);

    this.state={
      username:"",
      password:""
    };
  }

  render(){
    const { classes } =this.props;
    console.log("signup",this.props);
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>REGISTER</Typography>
            <TextField
              id="search"
              label="Username"
              type="placeholder"
              onChange={event=> this.setState({username:event.target.value})}
              value={this.state.term}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              onChange={event=>this.setState({password:event.target.value})}
              value={this.state.value}
            />
            <TextField
              id="repassword"
              label="Repeat Password"
              type="password"
            />
          </CardContent>
          <CardActions>
          <Link className={classes.btn} to="/">
            <Button size="small" style={{}}>Login</Button>
          </Link>
          <Link className={classes.btn} to="/signup">
            <Button size="small">Register</Button>
          </Link>
          </CardActions>
          <h4>Username</h4>{this.state.username}
          <h4>Password</h4>{this.state.password}
        </Card>
        
      </div>  
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
