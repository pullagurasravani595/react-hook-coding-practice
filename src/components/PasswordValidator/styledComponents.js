// Style your elements here

import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
`

export const CardContainer = styled.div`
  width: 60%;
  height: 55%;
  background-color: #383a4e;
  box-shadow: 1px 1px 3px 2px #434451;
  margin-top: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 140px;
    width: 30%;
    height: 42%;
    padding: 18px;
  }
`
export const Description = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #f8fafc;
`
export const InputElement = styled.input`
  height: 30px;
  width: 90%;
`
export const ErrorElement = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #ef4444;
`
