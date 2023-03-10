import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Vector.png";
import styled from "styled-components";

function Header() {
  return (
    <Container className="p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img src={logo} alt="metalyc" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.header`
  background: #ffffff;
  border-bottom: 2px solid #731054;
  img {
    width: 56px;
    height: 32px;
  }
`;

export default Header;
