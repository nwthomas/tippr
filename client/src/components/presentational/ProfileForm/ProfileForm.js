import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser, updateProfilePhoto } from "../../../store/actions";
import styled from "styled-components";

const ProfileFormContainer = styled.div`
  background: white;
  border: 1px solid #b5b5b5;
  margin: 100px auto 0;
  padding: 35px 0;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 0 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
      margin: 15px;
      width: 70%;

      &:last-of-type {
        padding-top: 9px;
      }
    }

    div {
      width: 70%;
      display: flex;
      justify-content: space-between;

      button {
        margin: 15px 0 10px;
        width: 47%;
      }
    }
  }
`;

class ProfileForm extends Component {
  state = {
    userProfile: {
      first_name: "",
      last_name: "",
      occupation: "",
      profile_photo: "",
      tagline: "",
      working_since: ""
    },
    selectedFile: null
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      userProfile: {
        ...this.state.userProfile,
        [e.target.name]: e.target.value
      }
    });
  };

  componentDidMount() {
    return this.props.loggedIn
      ? this.setState({
          ...this.state,
          userProfile: this.props.userProfile
        })
      : null;
  }

  goBack = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  handleFile = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  updateProfile = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.selectedFile);
    if (this.state.selectedFile) {
      this.props.updateProfilePhoto(this.state.userProfile.id, fd);
    }
    this.props.updateUser(this.state.userProfile);
    this.props.history.push("/");
  };

  render() {
    return (
      <ProfileFormContainer>
        <h1>Update Profile</h1>
        <form
          className="profile__form"
          onSubmit={this.updateProfile}
          method={"Put"}
          encType="multipart/form-data"
        >
          <input
            required
            autoComplete="off"
            type="text"
            name="first_name"
            placeholder="First name"
            value={this.state.userProfile.first_name}
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="text"
            name="last_name"
            placeholder="Last name"
            value={this.state.userProfile.last_name}
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={this.state.userProfile.occupation}
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="text"
            name="working_since"
            placeholder="Starting date of work"
            value={this.state.userProfile.working_since}
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="text"
            name="tagline"
            placeholder="Tagline"
            value={this.state.userProfile.tagline}
            onChange={this.handleChange}
          />
          <input
            autoComplete="off"
            type="file"
            name="profile_photo"
            onChange={this.handleFile}
          />
          <div>
            <button type="submit">Update</button>
            <button type="button" onClick={this.goBack}>
              Back
            </button>
          </div>
        </form>
      </ProfileFormContainer>
    );
  }
}

ProfileForm.propTypes = {
  loggedIn: PropTypes.bool,
  upserProfile: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    last_name: PropTypes.string.isRequired,
    profile_photo: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    type_id: PropTypes.number,
    user_type: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    working_since: PropTypes.string.isRequired
  })
};

const mapStateToProps = state => ({
  userProfile: state.userReducer.userProfile,
  loggedIn: state.userReducer.loggedIn
});

const mapActionsToProps = {
  updateUser,
  updateProfilePhoto
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProfileForm);
