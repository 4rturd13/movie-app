import React from "react";
import { Link } from "@reach/router";

import Logo from "../images/movie-logo.svg";
import TMDBLogo from "../images/tmdb_logo.svg";

import {
    StyledHeader,
    StyledLogo,
    StyledTMDBLogo
} from "../styles/StyledHeader";

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledLogo src={Logo} alt="rmdb-logo" />
            </Link>
            <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
        </div>
    </StyledHeader>
);

export default Header;
