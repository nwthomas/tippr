import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const EmployeeProfile = styled.div`
  margin: 100px auto 0;
  background: white;
  border: 1px solid #b5b5b5;
  display: flex;
  /* max-width: 500px;
  width: 100%; */
`;

const EmployeeProfileContent = styled.div`
  width: 100%;
  margin: 35px 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-decoration: none;
  align-items: center;
  color: rgba(0, 0, 0, 0.8);

  div:first-child {
    width: auto;
    max-width: 50%;

    img {
      object-fit: cover;
      border-radius: 50%;

      width: 300px;
      height: 300px;
      max-width: 100%;

      @media (max-width: 500px) {
        width: 200px;
        height: 200px;
        max-width: 100%;
      }
    }

    @media (max-width: 800px) {
      width: 100%;
      max-width: 100%;
      text-align: center;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 3%;

    h1 {
      margin-bottom: 15px;
      color: black;

      @media (max-width: 800px) {
        width: 100%;
        max-width: 100%;
        text-align: center;
        margin: 30px 0;
      }
    }

    p {
      margin-bottom: 20px;
      font-size: 2rem;
      color: black;
      text-align: left;

      span {
        font-weight: 700;
        text-align: left;

        @media (max-width: 800px) {
          margin: 0 10px 0 0;
          text-align: left;
        }
      }

      @media (max-width: 800px) {
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
    }

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin: 0;

      button {
        font-weight: 700;
        margin: 0 0 10px;
        width: 47%;

        @media (max-width: 500px) {
          width: 90%;
          max-width: 90%;
        }
      }

      @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    .employee-first {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;

      @media (max-width: 800px) {
        width: 50%;
        max-width: 50%;
      }

      @media (max-width: 500px) {
        width: 90%;
        max-width: 90%;
        margin: 0 auto;
      }
    }

    .employee-second {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;

      @media (max-width: 800px) {
        width: 50%;
        max-width: 50%;
      }

      @media (max-width: 500px) {
        width: 90%;
        max-width: 90%;
        margin: 0 auto;
      }
    }

    @media (max-width: 800px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      max-width: 100%;
      text-align: center;
      margin: 0 auto;
    }

    @media (max-width: 500px) {
      display: block;
      margin: 20px auto;
      left: 50px;
    }
  }

  @media (max-width: 800px) {
    display: block;
    height: auto;
  }
`;

const Employee = props => {
  const { employee } = props;
  const goToUpdateForm = e => {
    e.preventDefault();
    props.history.push("/update");
  };
  const goToTipReceived = e => {
    props.history.push(`/tipReceived/${employee.id}`);
  };
  return (
    <EmployeeProfile>
      <EmployeeProfileContent>
        <div>
          <img src={employee.profile_photo} alt="Profile avatar" />
        </div>
        <div>
          <h1>Employee Profile</h1>
          <div className="employee-first">
            <p>
              <span>Username:</span> {employee.username}
            </p>
            <p>
              <span>First name:</span> {employee.first_name}
            </p>
            <p>
              <span>Last name:</span> {employee.last_name}
            </p>
            <p>
              <span>Occupation:</span> {employee.occupation}
            </p>
          </div>
          <div className="employee-second">
            <p>
              <span>Employed since:</span> {employee.working_since}
            </p>
            <p>
              <span>Tagline:</span> {employee.tagline}
            </p>
            <p>
              <span>Employee ID:</span> {employee.id}
            </p>
          </div>
          <div>
            <button type="button" onClick={goToUpdateForm}>
              Update
            </button>
            {/* <button type="button" onClick={goToTipReceived}>
              Tips Received
            </button> */}
          </div>
        </div>
      </EmployeeProfileContent>
    </EmployeeProfile>
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

export default Employee;
