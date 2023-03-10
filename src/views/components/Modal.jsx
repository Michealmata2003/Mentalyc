import React, { useState, useRef } from "react";
import styled from "styled-components";
import ModalData from "../../data/ModalData";
import Select from "react-select";
import { IoClose } from "react-icons/io5";

function Modal({ hide }) {
  const [data, setData] = useState(ModalData);
  const [selectedOption, setSelectedOption] = useState(null);
  const [values, setValues] = useState({
    clientName: "",
  });
  let modalStyle = {
    display: "block",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  };
  const handleValidation = () => {
    let { clientName } = values;
    if (selectedOption?.value === "") {
      return true;
    } else if (clientName === "") {
      return true;
    }
    return false;
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Container className="modal show fade" style={modalStyle}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header justify-content-end">
              <IoClose onClick={hide} />
            </div>
            <div className="modal-body">
              <h4 className="modal-title">{data.title}</h4>
              <p>{data.info}</p>
              <form>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={data.categories}
                />
                <input
                  type="text"
                  name="clientName"
                  className="form-control shadow-none my-5"
                  placeholder="Enter client name"
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                />

                <div className="auth d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                    disabled={handleValidation()}
                  >
                    Finish Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  .modal-dialog {
    .modal-content {
      border: none;
      -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
      box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
      background: #ffffff;
      padding: 15px;
      border-radius: 16px;
      .modal-header {
        border: none;
        padding-bottom: 0px;
        svg {
          font-size: 20px;
          color: #000000;
          cursor: pointer;
        }
      }
      .modal-body {
        padding-top: 0px;
        h4 {
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          text-align: center;
          color: #000000;
        }
        p {
          font-family: "Montserrat", sans-serif;
          padding-top: 10px;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          text-align: center;
          color: #666666;
        }
        form {
          input {
            background-color: #f2f2f2 !important;
            border-radius: 8px !important;
            border: none !important;
            border-color: #f2f2f2 !important;
            font-family: "Montserrat", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #000000 !important;
          }
          .btn:hover {
            color: #ffff;
          }
          .btn:disabled {
            color: #ffff;
          }
        }
      }
    }
  }
`;

export default Modal;
