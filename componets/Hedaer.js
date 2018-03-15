import styled from 'styled-components'

import { Logo } from './Icons'

const Header = () => (
  <Wrapper>
    <TitleCountainer>
      <LogoCountainer>
        <Logo />
      </LogoCountainer>
      <Title>CrypTubers</Title>
    </TitleCountainer>
    <NavCountainer>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">New Channel</NavItem>
    </NavCountainer>
  </Wrapper>
)

export default Header

const Wrapper = styled.h1`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`
const TitleCountainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Title = styled.h1`
  font-family: 'roboto';
  font-size: 24px;
  margin-left: 5px;
  cursor: pointer;
`
const LogoCountainer = styled.div`
  width: 44px;
  height: 44px;
  transform: rotate(0deg);
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: rotate(-20deg);
  }
`

const NavCountainer = styled.nav`
  width: 150px;
  display: flex;
  justify-content: space-between;
`

const NavItem = styled.a`
  font-family: 'roboto';
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-decoration: none;
`
