import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import { Component } from "react";

class LoginPageContainer extends Component {
  render() {
    return (
      <LoginPage />
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}
const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(LoginPageContainer);