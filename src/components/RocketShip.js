import React from 'react'
import styled from 'styled-components'

const RocketShipWrapper = styled.div`
  display: flex;
  padding-top: 50px;
  padding-left: 50px;
  @media (max-width: 768px) {
    background-color: #230d49c0;
    justify-content: center;
    padding-top: 20px;
    padding-left: 0px;
  }
`
const RocketShipTitle = styled.h1`
  color: #cc9056;
  display: flex;
  flex-direction: column;
  p {
    font-family: Pacifico, cursive;
    font-size: 1.8rem;
    color: whitesmoke;
    text-align: right;
    margin-top: -20px;
    transform: rotate(-7deg);
  }
  @media (max-width: 768px) {
    font-size: 2.2rem;
    p {
      font-size: 1.3rem;
      margin-bottom: 2px;
    }
  }
`
const RocketShip = () => (
  <RocketShipWrapper>
    <RocketShipTitle>
      rocketship
      <p>Productions</p>
    </RocketShipTitle>
  </RocketShipWrapper>
)

export default RocketShip
