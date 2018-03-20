import styled from 'styled-components'
import { Connect, query } from 'urql'

const QueryString = `
  query{
    allChannels {
      id
      avatar
      subscribers
    }
  }
`
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
    <div />
    <ChannelList>
      <Table>
        <ChannelFields />
        <Connect
          query={query(QueryString)}
          children={({ loaded, data }) => {
            return loaded === false ? (
              <tr>
                <td colspan="7">Loading</td>
              </tr>
            ) : (
              data.allLinks.map(item => (
                <ChannelRow
                  key={item.id}
                  image={
                    'https://picsum.photos/75/75?random&image=' +
                    Math.floor(Math.random() * 10)
                  }
                  title={item.description}
                  categorie="ICO & Crypto Advice"
                  sub={Math.floor(Math.random() * 10) + 1 + 'M'}
                  views="1,330,00"
                  likes="1,011"
                  popularity="3"
                  lastVideo="2 hours ago"
                />
              ))
            )
          }}
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
