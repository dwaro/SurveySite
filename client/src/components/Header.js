import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google" style={{ color: "rgba(0, 0, 0, 0.87)" }}>
              Login with Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li
            key="2"
            style={{ color: "rgba(0, 0, 0, 0.87)", margin: "0 15px" }}
          >
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout" style={{ color: "rgba(0, 0, 0, 0.87)" }}>
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: "#00ffaa" }}>
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
            style={{
              paddingLeft: 15,
              paddingRight: 15,
              color: "rgba(0, 0, 0, 0.87)"
            }}
          >
            Survey-E
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
