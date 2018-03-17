import React from 'react'
import styled from 'styled-components'
import { Provider, Client } from 'urql'

import Header from '../componets/Hedaer'
import Categories from '../componets/Categories'
import MostPopular from '../componets/MostPopular'

const client = new Client({
  url: 'https://api.graph.cool/simple/v1/cj71mxvox2lvz0197vgwbtfs3',
})

const App = () => (
  <Provider client={client}>
    <Countainer>
      <Wrapper>
        <Header />
      </Wrapper>
      <Line />
      <Wrapper>
        <Categories />
        <MostPopular />
      </Wrapper>
    </Countainer>
  </Provider>
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
