import React from 'react'
import styled from 'styled-components'

import Header from '../componets/Hedaer'

const App = () => (
  <Countainer>
    <Wrapper>
      <Header />
    </Wrapper>
    <Line />
  </Countainer>
)

export default App

const Countainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Wrapper = styled.div`
  width: 1000px;
  min-height: 100px;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #bdbdbd;
`
