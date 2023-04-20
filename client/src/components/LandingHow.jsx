// This is the part of the Landing Page that talk about the how it works

// Title:Engage, Earn, and Empower with Solanact
// Content: Step 1 -> Create your free Solanact account, Step 2 -> Connect your funding method, Step 3 -> Engage with your favorite creators and earn tokens
// background is a png file called back2.png and it is in the assets folder

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import background from "../assets/back2.png";

const Logo = styled.img`
    width: 220px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
`;

const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 65px;
  font-weight: 400;
  color: #22bb31;
`;

const DescStepNumber = styled.p`
  font-size: 20px;
  width: 100px;
  font-weight: 800;
  color: #327467;
  text-transform: uppercase;
`;

const Desc = styled.p`
  font-size: 35px;
  font-weight: 300;
  color: #22bb31;
  align-items: center;
  text-align: left;
`;

const Button = styled.button`
  padding: 25px;
  font-size: 30px;
  background-color: #22bb31;
  border: none;
  border-radius: 55px;
  color: white;

  cursor: pointer;
  margin: 50px 0;

  &:hover {
    background-color: #327467;
  }
`;

const Flexer = styled.div`
  display: flex;
  align-items: center;
`;

const LandingHow = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Engage, Earn, and Empower with 
        <br />
        <Logo src={logo} />
        </Title>
        <Flexer>
          <DescStepNumber>Step 1</DescStepNumber>
          <Desc>Create your free Solanact account</Desc>
        </Flexer>

        <Flexer>
          <DescStepNumber>Step 2</DescStepNumber>
          <Desc>Connect your funding method</Desc>
        </Flexer>

        <Flexer>
          <DescStepNumber>Step 3</DescStepNumber>
          <Desc>Engage with your favorite creators and earn tokens</Desc>
        </Flexer>
      </Wrapper>
    </Container>
  );
};

export default LandingHow;
