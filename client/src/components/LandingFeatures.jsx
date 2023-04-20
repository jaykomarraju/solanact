// This is the features aspect of the Landing Page component

// Features

// Picture can be found in the assets folder and it is called money.png
// 1. 0% Commission
// Experience a social media platform that rewards creators and users with 0% commission on their genuine engagement.

// Picture can be found in the assets folder and it is called power.png
// 2. Decentralized Power
// Be part of a community-driven network where users hold the power, thanks to decentralized blockchain technology.

// Picture can be found in the assets folder and it is called tech.png
// 3. Responsive Support
// Enjoy a seamless experience with our dedicated 24/7 Support Center and Live Chat, always ready to assist you.

// background is available at assets/back3.png

import React from "react";
import styled from "styled-components";

import money from "../assets/money.jpg";
import power from "../assets/power.jpg";
import tech from "../assets/tech.jpg";
import background from "../assets/back3.png";

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
  width: 80%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const FeatureCard = styled.div`
    width: 30%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 40px;
    margin: 20px;
`;

const FeatureImg = styled.img`
    width: 100px;
    border-radius: 20px;
`;

const FeatureTitle = styled.h3`
    font-size: 30px;
    // color:#8f0977;
`;

const FeatureDesc = styled.p`
    font-size: 20px;
    color:#8f0977;
`;



const LandingFeatures = () => {
  return (
    <Container>
        <Wrapper>
            <FeatureCard>
                <FeatureImg src={money} />
                <FeatureTitle>0% Commission</FeatureTitle>
                <FeatureDesc>Experience a social media platform that rewards creators and users with 0% commission on their genuine engagement.</FeatureDesc>
            </FeatureCard>

            <FeatureCard>
                <FeatureImg src={power} />
                <FeatureTitle>Decentralized Power</FeatureTitle>
                <FeatureDesc>Be part of a community-driven network where users hold the power, thanks to decentralized blockchain technology.</FeatureDesc>

            </FeatureCard>

            <FeatureCard>
                <FeatureImg src={tech} />
                <FeatureTitle>Responsive Support</FeatureTitle>
                <FeatureDesc>Enjoy a seamless experience with our dedicated 24/7 Support Center and Live Chat, always ready to assist you.</FeatureDesc>
            </FeatureCard>
        </Wrapper>
    </Container>



  );
};

export default LandingFeatures;
