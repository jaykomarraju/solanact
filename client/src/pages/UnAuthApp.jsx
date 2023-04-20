// This is the page that displays the app for a unauthenicated user i.e, solana wallet isn't connected.
//

// Path: client/src/pages/UnAuthApp.jsx

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppUnAuthL from "../components/AppUnAuthL";
import AppUnAuthM from "../components/AppUnAuthM";
import AppUnAuthR from "../components/AppUnAuthR";

// Side 1 (Left): logo, #explore, settings
// Side 2 (Middle Main): Latest Posts Feed
// Side 3 (Right): Connect Wallet
            


const UnAuthApp = () => {   
    return (
        <div>
            <AppUnAuthL/>
            <AppUnAuthM/>
            <AppUnAuthR/>
        </div>
    )
}

export default UnAuthApp;