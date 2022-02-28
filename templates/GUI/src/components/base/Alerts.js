import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      console.log(error)
      if (error.msg.firstName) alert.error(error.msg.firstName.join());
      if (error.msg.lastName) alert.error(`First Name: ${error.msg.lastName.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.password) alert.error(error.msg.password.join());
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
      if (error.msg.vcode) alert.error(error.msg.vcode.join());
      if (error.msg.message) alert.error(error.msg.message);
      if (error.msg.msg) alert.error(error.msg.msg);
      if (error.msg.detail) alert.error(error.msg.detail);
    }

    if (message !== prevProps.message) {
      if (message.authLoginErr) alert.error(message.authLoginErr);
      if (message.authLogin) alert.success(message.authLogin);
      if (message.authSignup) alert.success(message.authSignup);
      if (message.logoutmsg) alert.info(message.logoutmsg);

      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
      if (message.generalSuccessMessage) alert.success(message.generalSuccessMessage);
      if (message.generalInfoMsg) alert.info(message.generalInfoMsg);
      if (message.generalErrorMsg) alert.error(message.generalErrorMsg);
    }

  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
