import React from "react";
import PropTypes from "prop-types";
import { EmployeeCard } from "../../presentational/EmployeeCard";
import styled from "styled-components";

const EmployeeList = styled.div`
  width: 100%;
  margin: 127px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const EmployeeListContainer = props => {
  const employees = props.users.filter(user => user.user_type === "employee");
  return (
    <EmployeeList>
      <h1>Select Employee</h1>
      {employees.map(employee => {
        return (
          <EmployeeCard
            match={props.match}
            history={props.history}
            employee={employee}
            key={employee.id}
          />
        );
      })}
    </EmployeeList>
  );
};

EmployeeListContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      last_name: PropTypes.string.isRequired,
      profile_photo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      tagline: PropTypes.string.isRequired,
      type_id: PropTypes.number,
      user_type: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      working_since: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default EmployeeListContainer;
