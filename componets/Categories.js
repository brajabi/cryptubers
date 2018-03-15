import styled from 'styled-components'

const Categories = () => (
  <Wrapper>
    <ListCountainer>
      <ListItem href="#">👻 Trading tutorials</ListItem>
      <ListItem href="#">💪 Crypto Advice</ListItem>
      <ListItem href="#">🤗 Crypto Advice</ListItem>
      <ListItem href="#">👻 Trading tutorials</ListItem>
      <ListItem href="#">👻 Trading tutorials</ListItem>
      <ListItem href="#">👻 Trading tutorials</ListItem>
      <ListItem href="#">👻 Trading tutorials</ListItem>
      <ListItem href="#">👻 Trading tutorials</ListItem>
      <ListItem href="#">👻 Trading tutorials</ListItem>
      <ListItem href="#">👻 Trading tutorials</ListItem>
      <ListItem href="#">👻 Trading tutorials</ListItem>
      <ListItem href="#">👻 Trading tutorials</ListItem>
    </ListCountainer>
  </Wrapper>
)

export default Categories

const Wrapper = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #936aeb 0%, rgba(255, 255, 255, 0) 100%),
    #46b7e8;
  margin-top: 40px;
`

const ListCountainer = styled.div`
  width: 95%;
  height: 87%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
`
const ListItem = styled.a`
  width: 187px;
  height: 47px;
  padding-left: 20px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  color: #000;
  line-height: 47px;
  text-align: left;
  text-decoration: none;
  font-weight: 400;
  font-size: 15px;
`
