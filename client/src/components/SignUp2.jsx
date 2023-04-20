import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logoAm.png";

const BackgroundColor = "#1e011e";

// THIS IS THE SIGNUP PAGE (PART 1): CREATE ACCOUNT
// NAME
// EMAIL OR PHONE NUMBER
// SWAP BETWEEN EMAIL AND PHONE NUMBER THIS SHOULD CHANGE THE INPUT TYPE TO EMAIL OR NUMBER AND THE PLACEHOLDER TEXT
// DATE OF BIRTH

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${BackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  width: 55px;
  height: 55px;
  margin-top: 30px;
  margin-left: 40px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  // padding: 25px;
  font-size: 30px;
  background: transparent;
  width: 100%;
  border: none;
  text-align: left;
  color: #22bb31;
  cursor: pointer;

  margin: 20px 0;
  margin-left: 40px;
  &:hover {
    font-weight: bold;
  }
`;

const Title = styled.h1`
  font-size: 65px;
  font-weight: 400;
  color: #22bb31;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 55px;
  background: transparent;
  border: 2px solid #22bb31;
  padding: 10px 20px;
  color: white;
  font-size: 30px;
  placeholder-color: white;
  margin: 30px 0;
`;

const LabelHeading = styled.p`
  font-size: 30px;
  font-weight: 300;
  color: #22bb31;
  text-transform: uppercase;
  margin: 5px 0;
`;

const LabelDescription = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #22bb31;
`;

const ButtonNext = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 55px;
  background: transparent;
  border: 2px solid #22bb31;
  color: white;
  font-size: 30px;
  padding: 0 20px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background: #22bb31;
  }
`;

const DOBInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 55px;
  background: transparent;
  border: 2px solid #22bb31;
  color: white;
  font-size: 30px;
  padding: 10px 20px;
  margin: 30px 0;
`;

const Form = styled.form`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const SignUp2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  return (
    <Container>
      <Form>
        <Title>Create Account</Title>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <Input
          type="password"
          placeholder="Password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <LabelHeading>Date of Birth</LabelHeading>
        <DOBInput
          type="date"
          placeholder="Enter your date of birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <Link to="/signup/3">
        <ButtonNext>Next</ButtonNext>
        </Link>
      </Form>
    </Container>
  );
};

export default SignUp2;
