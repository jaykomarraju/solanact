// This is a simple footer component that will be used in the Landing Page


// only content: © 2023 Solanact, Inc.


import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 30vh;
    background-color: #22bb31;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 50px;
    font-weight: 400;
    color: white;
`;

const Desc = styled.p`
    font-size: 24px;
    font-weight: 300;
    color: white;
    margin-top: 20px;
`;

const SocialContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;




const SocialIcon = styled.img`
    width: 30px;

    margin-right: 20px;
`;

const Footer = () => {
    return (
        <Container>
            <Title>© 2023 Solanact, Inc.</Title>
            {/* <SocialContainer>
                <SocialIcon src="assets/facebook.png" />
                <SocialIcon src="assets/instagram.png" />
                <SocialIcon src="assets/twitter.png" />
                <SocialIcon src="assets/youtube.png" />
            </SocialContainer> */}
        </Container>
    )
}

export default Footer
