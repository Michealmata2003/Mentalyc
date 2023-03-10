import React, { useState } from "react";
import styled from "styled-components";
import { BsQuestionCircle } from "react-icons/bs";
import Modal from "./Modal"
import Progress from "./Progress"

function MainContainer() {
  
  const [modalPopUp, setModalPopUp] = useState(false);
  return (
    <>
      <Container className="container">
        <div className="d-flex justify-content-between py-4">
          <div className="name">
            <h5>Hi, Maria</h5>
          </div>
          <div className="question-mark">
            <BsQuestionCircle />
          </div>
        </div>
        <div className="upload mb-4">
          <h3>Upload your session’s recordings</h3>
        </div>
        <div className="upload-btn">
          <button
            onClick={() => setModalPopUp(true)}
            className="w-100"
            type="button"
          >
            Upload
          </button>
        </div>
        <Progress/>
        {modalPopUp === true ? <Modal hide={() => setModalPopUp(false)} /> : ""}
      </Container>
    </>
  );
}

const Container = styled.div`
  .name {
    h5 {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: #000000;
    }
  }
  .question-mark {
    svg {
      color: #731054;
    }
  }
  .upload {
    h3 {
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color: #000000;
    }
  }
  button {
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    border: none;
    color: #ffffff;
    background: linear-gradient(295.67deg, #de0d6f 16.23%, #731054 83.77%);
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export default MainContainer;
