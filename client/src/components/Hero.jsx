// This is the Hero component
// It will be used in the Landing Page
//

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import background which is a png file called back1.png and it is in the assets folder

import background from "../assets/back1.png";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 80%;
    padding: 20px;
    // background-color: white;
    // border-radius: 10px;
`;

const Title = styled.h1`
    font-size: 55px;
    font-weight: 600;
    color: #22bb31;
`;

const Desc = styled.p`
    margin: 20px 0;
    font-size: 40px;
    font-weight: 300;
    color: #327467;
`;


const Button = styled.button`
    padding: 25px;
    font-size: 20px;
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


const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Title>A Decentralized Platform to Monetize Social Interactions</Title>
                <Desc>
                    Empowering creators and users through a token-based economy.
                </Desc>
                <Button>START NOW</Button>
            </Wrapper>
        </Container>
    )
}

export default Hero;