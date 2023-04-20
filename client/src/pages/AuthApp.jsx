// This is the page that displays the app for a unauthenicated user i.e, solana wallet isn't connected.
//

// Path: client/src/pages/UnAuthApp.jsx

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppAuthL from "../components/AppAuthL";
import AppUnAuthM from "../components/AppUnAuthM";
import AppUnAuthR from "../components/AppUnAuthR";
import AppAuthM from "../components/AppAuthM";
import AppAuthR from "../components/AppAuthR";

// Side 1 (Left): logo, #explore, settings
// Side 2 (Middle Main): Latest Posts Feed
// Side 3 (Right): Connect Wallet
            


const AuthApp = () => {   
    return (
        <div>
            <AppAuthL/>
            <AppAuthM/>
            <AppAuthR/>
        </div>
    )
}

export default AuthApp;