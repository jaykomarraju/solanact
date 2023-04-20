// This is the page that displays the app for a unauthenicated user i.e, solana wallet isn't connected.

// This is the component in the right of the app. It contains the connect wallet button.

// Path: client/src/components/AppUnAuthR.jsx


import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logoAm.png";

const BackgroundColor = "#1e011e";

const Container = styled.div`
    width: 20vw;
    min-height: 100vh;
    background-color: ${BackgroundColor};
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
`;

const Button = styled.button`
    width: 80%;
    height: 40px;
    margin-top: 30px;
    margin-left: 40px;
    margin-bottom: 10px;
    border-radius: 20px;

    border: none;
    padding-left: 20px;
    font-size: 20px;
    background-color: #270a27;
    color: #22bb31;
    cursor: pointer;
    &:hover {
        color: #3a023b;
        background-color: #22bb31;
    }
`;

const AppUnAuthR = () => {
    
        return (
            <Container>
    
                <Button>Connect Wallet</Button>
    
            </Container>
        )
    }

export default AppUnAuthR;