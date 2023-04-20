// This is the page that displays the app for a unauthenicated user i.e, solana wallet isn't connected.

// This component is the left bar of the app. It contains the logo, the explore button, and the settings button.

// Path: client/src/components/AppUnAuthL.jsx

import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logoAm.png";

const BackgroundColor = '#1e011e';

const Container = styled.div`
    width: 25vw;
    height: 100vh;
    background-color: ${BackgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
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

const AppAuthL = () => {

    return (
        <Container>

            <Logo src={logo} />
            <Button># Explore</Button> 
            <Button>Following</Button> 
            <Button>Notifications</Button>
            <Button>My Profile</Button>
            <Button>History</Button>
            <Button>$ Settings</Button>

        </Container>
    );
};

export default AppAuthL;
