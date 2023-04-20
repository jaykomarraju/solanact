// This is the Landing Navbar component

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import logo from "../assets/logo.png";

import logo from "../assets/logo.png";

const Container = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 180px;
  height: 100%;
  object-fit: contain;
  margin-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 50px;
  font-size: 20px;
  font-weight: 600;
  color: #327467;
  cursor: pointer;

  &:hover {
    color: #22bb31;
  }
`;

const Button = styled.button`
  border: 2px solid #22bb31;
  padding: 10px;
  background-color: white;
  color: #22bb31;
  font-size: 18px;
  cursor: pointer;
  border-radius: 25px;
  width: 140px;
  margin: 0 20px;

  &:hover {
    background-color: #22bb31;
    color: white;
  }
`;

const LandingNavbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
      </Wrapper>
      <Wrapper>
        <Menu>
          <MenuItem>EXPLORE</MenuItem>
          <MenuItem>WHY SOLANACT?</MenuItem>
          <MenuItem>LEARN</MenuItem>
        </Menu>
      </Wrapper>
      {/* <Wrapper> */}
      <Link to="/app">
        <Button>Enter App</Button>
      </Link>
      {/* <Button>Sign Up</Button> */}
      {/* </Wrapper> */}
    </Container>
  );
};

export default LandingNavbar;
