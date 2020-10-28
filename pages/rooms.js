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
    .filter(file => {
      if (file.startsWith('1 -')) return file
      if (file.startsWith('15 -')) return file
      if (file.startsWith('16 -')) return file
      if (file.startsWith('18 -')) return file
      if (file.startsWith('19 -')) return file
      if (file.startsWith('multi-unit -')) return file
      else return
    })
  return {
    props: { images }
  }
}
