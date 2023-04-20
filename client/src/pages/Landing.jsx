import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LandingNavbar from "../components/LandingNavbar";
import Hero from "../components/Hero";
import Stats from "../components/LandingStats";
import LandingHow from "../components/LandingHow";
import LandingFeatures from "../components/LandingFeatures";
import LandingCTA from "../components/LandingCTA";
import Footer from "../components/Footer";

const Container = styled.div`
    width: 100vw;

`;

const Landing = () => {
  return (
    <Container>
        <LandingNavbar />
        <Hero />
        <Stats />
        <LandingHow />
        <LandingFeatures />
        <LandingCTA />
        <Footer/>
    </Container>
  );
};

export default Landing;
