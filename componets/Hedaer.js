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
  </Wrapper>
)

export default Header

const Wrapper = styled.h1`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
`
const TitleCountainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
`
const Title = styled.h1`
  font-family: 'roboto';
  font-size: 24px;
`
const LogoCountainer = styled.div`
  width: 44px;
  height: 34px;
`
