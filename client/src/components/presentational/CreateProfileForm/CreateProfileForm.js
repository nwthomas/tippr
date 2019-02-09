import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createNewProfile, updateProfilePhoto } from "../../../store/actions";
import styled from "styled-components";

const CreateProfileContainer = styled.div`
  background: white;
  border: 1px solid #b5b5b5;
  margin: 15vh auto 0;
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
      justify-content: center;

      button {
        margin: 15px 0 10px;
        width: 100%;
      }
    }
  }
`;

class CreateProfileForm extends Component {
  state = {
    userProfile: {
      first_name: "",
      last_name: "",
      occupation: "",
      tagline: "",
      working_since: "",
      username: null
    },
    id: null,
    selectedFile: null
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      userProfile: {
        ...this.state.userProfile,
        username: this.props.newAccountUsername
      },
      id: this.props.newAccountID
    });
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      userProfile: {
        ...this.state.userProfile,
        [e.target.name]: e.target.value
      }
    });
  };

  goBack = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  handleFile = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  createNewProfile = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.selectedFile);
    if (this.state.selectedFile) {
      this.props.updateProfilePhoto(this.state.id, fd);
    }
    this.props.createNewProfile(this.state.userProfile);
    this.props.history.push("/");
  };

  render() {
    return (
      <CreateProfileContainer>
        <h1>Create Profile</h1>
        <form
          className="profile__form"
          onSubmit={this.createNewProfile}
          method={"Post"}
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
            <button type="submit">Signup</button>
          </div>
        </form>
      </CreateProfileContainer>
    );
  }
}

CreateProfileForm.propTypes = {
  newAccountID: PropTypes.number,
  newAccountUsername: PropTypes.string,
  createNewProfile: PropTypes.func,
  updateProfilePhoto: PropTypes.func
};

const mapStateToProps = state => ({
  newAccountID: state.userReducer.newAccountID,
  newAccountUsername: state.userReducer.newAccountUsername
});

const mapActionsToProps = {
  createNewProfile,
  updateProfilePhoto
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CreateProfileForm);
