import React from "react"
import styled from "styled-components"
import { borderBox } from "../styles/global"

const Header = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9;
  margin: 0 auto;
  text-align: center;
  white-space: nowrap;
  height: 15%;
  min-height: 50px;
  height: 50px;
  width: 60%;
  background: ${props => props.theme.mainColor};

  &::after {
    align-self: flex-end;
    position: absolute;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-color: ${props => props.theme.altColor} transparent transparent
      transparent;
    content: "";
    width: 0;
    height: 0;
    transform: translateY(99%);
  }
`
const Title = styled.h2`
  display: flex;
  align-self: center;
  text-align: center;
  margin: 0;
  font-family: arial;
  font-size: 16px;
  padding: 0 10px;
  text-transform: uppercase;
  color: #fff;
  ${borderBox}
`
const SectionTitle = ({ title }) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  )
}

export default SectionTitle
