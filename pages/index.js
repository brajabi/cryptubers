import React from 'react'
import styled from 'styled-components'

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
`

const Wrapper = styled.div`
  width: 1000px;
  min-height: 100px;
  border: 1px solid #eee;
`

const Line = styled.div`
  width: 100%;
  height: 5px;
  background: #000;
`
