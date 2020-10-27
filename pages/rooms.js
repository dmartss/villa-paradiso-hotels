import Page from 'components/page'
import Container from 'components/container'
import rooms from 'lib/rooms'
import Image from 'components/image'

export default function Rooms() {
  return (
    <Page title="Rooms">
      <Container role="main" dotBackground>
        <Container center padding>
          {rooms.map(
            ({ name, type, occupancy, quantity, description, images }) =>
              description && (
                <div className="room" key={name}>
                  <h3 className="fp fw3">{name}</h3>
                  <div className="info fs">
                    <h5 className="fw4">Type: {type}</h5>
                    <h5 className="fw4">Occupancy: {occupancy}</h5>
                    <h5 className="fw4"># of Rooms: {quantity}</h5>
                  </div>
                  <h5 className="fp fw4">{description}</h5>
                  <div className="images">
                    {images.map(({ src, alt }) => (
                      <Image
                        key={src}
                        className="image shadow radius"
                        src={src}
                        alt={alt}
                        width={300}
                        height={200}
                      />
                    ))}
                  </div>
                  <style jsx>{`
                    .room {
                      padding-bottom: var(--gap-double);
                    }
                    .room:not(:first-of-type) {
                      border-top: 1px solid var(--accents-3);
                      padding-top: var(--gap-double);
                    }
                    .info {
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                    }
                    .info > h5 {
                      flex: 1;
                    }
                    .images {
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                      flex-wrap: wrap;
                    }

                    .images > :global(figure) {
                      flex: 1;
                    }
                  `}</style>
                </div>
              )
          )}
        </Container>
      </Container>
    </Page>
  )
}
