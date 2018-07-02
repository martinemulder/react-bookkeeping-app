import React from 'react';
import Button from '../../ui/Button/Button';
import { startLogin } from './actions/auth';
import { connect } from 'react-redux';

export class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { startLogin } = this.props;
    return (
      <div id="login-frame">
        <div className="content-wrap page-wrap">
            <div id="login">
              <h1>Login to Bookkeeping</h1>
              <Button
                action={startLogin}
                text="Login with Google"
                color="primary"
              />
            </div>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);