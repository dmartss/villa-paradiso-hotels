import Page from 'components/page'
import Container from 'components/container'
import Rooms from 'components/rooms'
import fs from 'fs'
import path from 'path'

export default function RoomsPage({ images }) {
  return (
    <Page title="Rooms">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <Rooms images={images} />
        </Container>
      </Container>
    </Page>
  )
}

export const getStaticProps = () => {
  const images = fs
    .readdirSync('./public/showcase-thumbnails/')
    .filter(file => path.extname(file) === '.jpg')
    .reduce(
      (prev, curr) => [
        ...prev,
        ...(curr.startsWith('1 -') ||
        curr.startsWith('15 -') ||
        curr.startsWith('16 -') ||
        curr.startsWith('18 -') ||
        curr.startsWith('19 -') ||
        curr.startsWith('multi-unit -')
          ? [curr]
          : [])
      ],
      []
    )

  return {
    props: { images }
  }
}
