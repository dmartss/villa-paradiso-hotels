import fs from 'fs'
import path from 'path'
import Page from 'components/page'
import Container from 'components/container'
import Rooms from 'components/rooms'
import { matches } from 'lib/constants'

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
    .filter(image => matches.includes(image.split('-')[0]))

  return {
    props: { images }
  }
}
