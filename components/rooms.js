import Container from 'components/container'
import SectionHeader from 'components/section-header'
import rooms from 'lib/rooms'
import { NAME_SHORT } from 'lib/constants'
import Image from './image'

const imgWidth = 300
const imgHeight = 168

export default function Rooms() {
  return (
    <Container role="main" wide dotBackground aria-labelledby="rooms">
      <Container center padding>
        <SectionHeader
          id="rooms"
          title={`${NAME_SHORT} Rooms`}
          description="Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in
          dictum."
        />
        {rooms.map(({ name, type, occupancy, quantity, description, images }) => (
          <div className="room" key={name}>
            <h3 className="mute fw3">{name}</h3>
            <div className="info subtitle">
              {type && <h5 className="fw4">Type: {type}</h5>}
              {occupancy && <h5 className="fw4">Occupancy: {occupancy}</h5>}
              {quantity && <h5 className="fw4"># of Rooms: {quantity}</h5>}
            </div>
            {description && <h5 className="fw4">{description}</h5>}
            <div className="images">
              {images.map(({ src }) => (
                <Image
                  key={src}
                  className="no-drag no-tap-highlight"
                  margin={10}
                  shadow
                  alt={src}
                  src={`/images${src}`}
                  layout="responsive"
                  width={imgWidth}
                  height={imgHeight}
                />
              ))}
            </div>
            <style jsx>{`
              .info {
                display: flex;
                justify-content: space-around;
                align-items: center;
              }
              .room {
                padding-top: 3rem;
                border-top: 1px solid #efefef;
              }
              .images {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
              }
               {
                /* .images > :global(figure):nth-last-child(1):nth-child(even) {
                grid-column: 2;
              } */
              }

              :global(.room):last-of-type {
                padding-bottom: 3rem;
              }

              @media (max-width: 960px) {
                .room {
                  padding-top: 1rem;
                }
                .images {
                  grid-template-columns: auto;
                }
              }
            `}</style>
          </div>
        ))}
      </Container>
    </Container>
  )
}
