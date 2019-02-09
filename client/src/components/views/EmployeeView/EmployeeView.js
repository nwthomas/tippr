import React from "react";
import { connect } from "react-redux";
import { Employee } from "../../presentational/Employee";
import { ProfileForm } from "../../presentational/ProfileForm";
import { Route } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
// import TipReiceivedModal from "../../presentational/TipReceivedModal/TipReceivedModal";

const EmployeeProfileContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const EmployeeView = props => {
  const { userProfile } = props;
  return (
    <EmployeeProfileContainer>
      <h1>Employee</h1>
      <Route
        exact
        path="/"
        render={props => <Employee {...props} employee={userProfile} />}
      />
      <Route
        path="/update"
        render={props => (
          <ProfileForm {...props} employee={props.userProfile} />
        )}
      />
      {/* <Route
        path="/tipReceived/:id"
        render={props => <TipReiceivedModal {...props} />}
      /> */}
    </EmployeeProfileContainer>
  );
};

Employee.propTypes = {
  employee: PropTypes.shape({
    first_name: PropTypes.string,
    id: PropTypes.number,
    last_name: PropTypes.string,
    profile_photo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tagline: PropTypes.string,
    type_id: PropTypes.number,
    user_type: PropTypes.string,
    username: PropTypes.string,
    working_since: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

const mapStateToProps = state => ({
  userProfile: state.userReducer.userProfile
});

export default connect(
  mapStateToProps,
  {}
)(EmployeeView);
