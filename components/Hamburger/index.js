import React from 'react'
import { StyledHamburger } from './Hamburger.styles'

const Hamburger = ({ isOpen, onClick }) => (
  <StyledHamburger isOpen={isOpen} onClick={onClick}>
    <div />
    <div />
    <div />
  </StyledHamburger>
)

export default Hamburger
