import styled from 'styled-components'

const ChannelFields = () => (
  <thead>
    <tr>
      <th />
      <th>Title & Cat</th>
      <th>Sub</th>
      <th>Views</th>
      <th>Likes</th>
      <th>Popularity</th>
      <th>LastVideo</th>
    </tr>
  </thead>
)

const ChannelRow = ({
  image,
  title,
  categorie,
  sub,
  views,
  likes,
  popularity,
  lastVideo,
}) => (
  <tr>
    <td>
      <ChannelAvatar src={image} />
    </td>
    <td>
      <ChannelTitle>{title}</ChannelTitle>
      <small>{categorie}</small>
    </td>
    <td>{sub}</td>
    <td>{views}</td>
    <td>{likes}</td>
    <td>{popularity}</td>
    <td>{lastVideo}</td>
  </tr>
)

const MostPopular = () => (
  <Wrapper>
    <TitleCountainer>
      <Title>⭐ Most Populars</Title>
    </TitleCountainer>
    <ChannelList>
      <Table>
        <ChannelFields />
        <ChannelRow
          image="https://picsum.photos/75/75?random&image=0"
          title="Keith Wareing"
          categorie="ICO & Crypto Advice"
          sub="10M"
          views="1,330,00"
          likes="1,011"
          popularity="3"
          lastVideo="2 hours ago"
        />
        <ChannelRow
          image="https://picsum.photos/75/75?random&image=2"
          title="Keith Wareing"
          categorie="ICO & Crypto Advice"
          sub="10M"
          views="1,330,00"
          likes="1,011"
          popularity="3"
          lastVideo="2 hours ago"
        />
        <ChannelRow
          image="https://picsum.photos/75/75?random&image=3"
          title="Keith Wareing"
          categorie="ICO & Crypto Advice"
          sub="10M"
          views="1,330,00"
          likes="1,011"
          popularity="3"
          lastVideo="2 hours ago"
        />
        <ChannelRow
          image="https://picsum.photos/75/75?random&image=4"
          title="Keith Wareing"
          categorie="ICO & Crypto Advice"
          sub="10M"
          views="1,330,00"
          likes="1,011"
          popularity="3"
          lastVideo="2 hours ago"
        />
      </Table>
    </ChannelList>
  </Wrapper>
)

export default MostPopular

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`

const TitleCountainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  width: auto;
  font-size: 24px;
`

const ChannelList = styled.div`
  width: 100%;
  min-height: 100px;
`

const Table = styled.table`
  width: 100%;
  th {
    padding-bottom: 10px;
  }
  tr {
    text-align: left;
    padding: 10px 0 10px 0;
  }
`

const ChannelAvatar = styled.img`
  border-radius: 15px;
`

const ChannelTitle = styled.h2`
  margin: 0;
  padding: 0;
`
