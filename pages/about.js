import Page from 'components/page'
import Container from 'components/container'
import SectionHeader from 'components/section-header'
import { NAME_SHORT, TEXT } from 'lib/constants'
import Image from 'components/image'

export default function About() {
  return (
    <Page title="About">
      <Container role="main" wide dotBackground>
        <Container center padding>
          <SectionHeader id="about" title={`About ${NAME_SHORT}`} description={TEXT[0]} />
          <Image
            shadow
            className="no-drag"
            oversize={false}
            alt="Room 1"
            src="/showcase/exterior/1.jpg"
            width={3000 / 3.25}
            height={2000 / 3.25}
          />
          <SectionHeader id="service" title="Service" description={TEXT[1]} />
          <SectionHeader id="Where it's at" title="Where it's at" description={TEXT[2]} />
        </Container>
      </Container>
    </Page>
  )
}
