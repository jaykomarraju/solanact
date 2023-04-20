// This is the Stats component of the Landing Page
// It will be used in the Landing Page to display the stats of the website i.e, the number of users, the number of posts, and the number of solana tokens transferred

import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";  // This is the logo of the website
import background from "../assets/back1w.png"; // This is the background image of the website

const Container = styled.div`
  width: 100vw;
  height: 60vh;
  // The background image is the back1.png file which is in the assets folder. However it should be blended with white color
    
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;



  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: -30px;
  font-size: 50px;
  font-weight: 400;
  color: #22bb31;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-top: 50px;
`;

const Card = styled.div`
  width: 30%;
//   height: 200px;
  background-color: white;
    border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Number = styled.h1`
  font-size: 80px;
  padding: 0px;
  font-weight: 400;
  color: #22bb31;

  margin-top: 10px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #327467;
  margin-top: -45px;
  text-transform: uppercase;
`;

const Logo = styled.img`
  width: 220px;
  margin-bottom: -10px;
  margin-right: 10px;
//   height: 100px;
//   border-radius: 50%;
//   object-fit: cover;
`;

const Stats = () => {
  return (
    <Container>
      <Title>
        <Logo src={logo} /> is Social Media for Everyone!
      </Title>
      <Wrapper>
        <Card>
          <Number>100</Number>
          <Desc>Users</Desc>
        </Card>
        <Card>
          <Number>200</Number>
          <Desc>Posts</Desc>
        </Card>
        <Card>
          <Number>300</Number>
          <Desc>Solana Tokens Transferred</Desc>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Stats;
