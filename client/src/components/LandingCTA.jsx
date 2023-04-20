// This is the final call to action on the landing page
// background image is back4.png

// Embrace the Future of Social Media with Solanact
// Sign up today and experience a more rewarding and transparent social media platform built on the Solana blockchain.

// Get Started with Solanact

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import background from "../assets/back4.png";

const Logo = styled.img`
    width: 250px;
    margin-bottom: -10px;
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

const Desc = styled.p`
    font-size: 35px;
    font-weight: 300;
    color: #22bb31;
    align-items: center;
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

const LandingCTA = () => {

    return (
        <Container>
            <Wrapper>
                
                <Title>Embrace the Future of Social Media with <Logo src={logo} /></Title>

                <Desc>Sign up today and experience a more rewarding and transparent social media platform built on the Solana blockchain.</Desc>

                {/* <Link to="/register"> */}
                    <Button>Get Started with Solanact</Button>
                {/* </Link> */}

            </Wrapper>
        </Container>
    )
}

export default LandingCTA;



