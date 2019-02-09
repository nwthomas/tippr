import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutSite } from "../../../store/actions";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  background: #43d9b8;
  -webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
  position: fixed;
  padding: 0 3%;
  top: 0;
  left: 0;
  z-index: 10;

  div {
    width: 100%;
    max-width: 1200px;
    height: 80px;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h1 {
      font-size: 3.8rem;
      font-weight: 700;
      text-transform: lowercase;
      font-family: "Ubuntu", sans-serif;
    }

    div {
      display: flex;
      justify-content: flex-end;

      a {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 1.6rem;
        color: black;
        margin-left: 2%;

        &:hover {
          text-decoration: underline;
        }
      }

      a.active {
        text-decoration: underline;
      }
    }
  }
`;

const NavigationContainer = props => {
  const logout = e => {
    e.preventDefault();
    props.logoutSite();
    props.history.push("/");
  };
  return (
    <NavContainer>
      <div>
        <h1>tippr</h1>
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          {props.userType === "employee" && (
            <NavLink to="/update">Update</NavLink>
          )}
          <Link to="/" onClick={logout}>
            Logout
          </Link>
        </div>
      </div>
    </NavContainer>
  );
};

const mapStateToProps = state => ({
  userType: state.userReducer.userType
});

const mapActionsToProps = {
  logoutSite
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(NavigationContainer);
