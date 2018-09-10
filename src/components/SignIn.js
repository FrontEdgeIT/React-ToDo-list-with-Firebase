import './SignIn.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from '../actions';

class Signin extends Component {
  static contextTypes = {
      router: PropTypes.object,
  };

  componentWillUpdate(nextProps) {
      if (nextProps.auth) {
          this.context.router.history.push('/app');
      }
  }

  render() {
      return (
          <div>
              <div className="row social-signin-container">
                  <div className="col s10 offset-s1 center-align">
                      <img alt="Sign in" id="sign-in" src="/img/user.png" />
                      <h4 id="sign-in-header">Sign In to start</h4>
                      <a href="#" className="social-signin" onClick={this.props.signIn}>
                          <i className="fa fa-google social-signin-icon" />
            Sign In With Google
                      </a>
                  </div>
              </div>
              <div className="Login">
                  <form onSubmit={this.handleSubmit}>
                      <label>User Name</label>
                      <input type="text" data-test="username" value="test" onChange={this.handleUserChange} />

                      <label>Password</label>
                      <input type="password" data-test="password" value="tes1t" onChange={this.handlePassChange} />

                      <input type="submit" value="Log In" data-test="submit" />
                  </form>
              </div>
          </div>
      );
  }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { signIn })(Signin);
