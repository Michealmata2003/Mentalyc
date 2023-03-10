import React from "react";
import styled from "styled-components";
import {BsTrash} from "react-icons/bs";

function Progress() {
  return (
    <>
      <Container>
        <div className="notes-no d-flex align-items-center">
          <span>2</span>
          <div className="notes-text">Notes in progress</div>
        </div>
        <div className="notes-table">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Client</th>
                <th scope="col">Type</th>
                <th scope="col">ETA</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jon Bellion</td>
                <td>Progress note</td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      // style="width: 25%"
                    ></div>
                  </div>
                </td>
                <td><BsTrash/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  .notes-no {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 16px;
    margin-top: 100px;
    padding: 5px 30px;
    span {
      align-items: flex-start;
      padding: 4px 11px;
      width: 32px;
      height: 32px;
      background: #de0d6f;
      border-radius: 250px;
      color: #ffffff;
    }
    .notes-text {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #000000;
      padding-left: 10px;
    }
  }
`;

export default Progress;
