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
      const { router } = this.context;
      if (nextProps.auth) {
          router.history.push('/app');
      }
  }

  render() {
      return (
          <div>
              <div className="row social-signin-container">
                  <div className="col s10 offset-s1 center-align">
                      <img alt="Sign in" id="sign-in" src="/img/user.png" />
                      <h4 id="sign-in-header">Sign In to start</h4>
                      <button type="button" className="social-signin" onClick={this.props.signIn}>
                          <i className="fa fa-google social-signin-icon" />
            Sign In With Google
                      </button>
                  </div>
              </div>
          </div>
      );
  }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { signIn })(Signin);
