import React from 'react'
import Header from '../components/Header'
import styled from "styled-components";
import MainContainer from '../components/MainContainer';

function Dashboard() {
  return (
    <>
    <Container>
      <Header/>
      <MainContainer/>
    </Container>
    </>
  )
}

const Container = styled.div``;

export default Dashboard