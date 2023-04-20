import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import AppUnAuthL from "../components/AppUnAuthL";
import AppUnAuthM from "../components/AppUnAuthM";
import AppUnAuthR from "../components/AppUnAuthR";
import SignUp1 from "../components/SignUp1";

// Side 1 (Left): logo, #explore, settings
// Side 2 (Middle Main): Latest Posts Feed
// Side 3 (Right): Connect Wallet
// All this is blurred out and the SignUp1 component is displayed in the middle.

const SignUp = () => {
    return (
        <div>
        <SignUp1 />
        </div>
    );


    }

export default SignUp;

