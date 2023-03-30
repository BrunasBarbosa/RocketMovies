import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { Container } from './styles';

export function Rate({ rate = 0 }) {
  const starsOuter = [];
  const starsInner = [];

  for (let i = 0; i < 5; i++) {
    starsOuter.push(<IoIosStarOutline key={i} />);
  }

  for (let i = 0; i < rate; i++) {
    starsInner.push(<IoIosStar key={i} />);
  }

  return (
    <Container >
      <div className='stars-outer'>
        {starsOuter}
      </div>

      <div className='stars-inner'>
        {starsInner}
      </div>
    </Container>
  );
};
