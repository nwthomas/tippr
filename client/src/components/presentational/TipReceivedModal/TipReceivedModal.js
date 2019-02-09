import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const TipProfile = styled.div`
  margin: 100px auto 0;
  background: white;
  border: 1px solid #b5b5b5;
  display: flex;
  /* max-width: 500px;
  width: 100%; */
`;

const TipContent = styled.div`
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

class TipReiceived extends Component {
  state = {
    user: []
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const token = localStorage.getItem("token");
    const reqOptions = {
      headers: { authorization: token }
    };
    const user = await axios.get(
      `http://localhost:5000/workers/${id}`,
      reqOptions
    );
    console.log("bt1");
    await this.setState({ user: user.data });
    console.log("bt2");
  }
  render() {
    console.log(this.state.user.tips);
    return (
      <TipProfile>
        <TipContent>
          <div>
            <h2>Total Tips Received</h2>
            <h2>$ {this.state.user.total_tip}</h2>
          </div>
        </TipContent>
      </TipProfile>
    );
  }
}

export default TipReiceived;
