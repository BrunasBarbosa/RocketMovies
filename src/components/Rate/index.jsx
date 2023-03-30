import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { Container } from './styles';
import { } from 'react';

export function Rate({ rate = 0 }) {
  const starsOuter = [];
  const starsInner = [];

  const key = 10;

  for (let i = 0; i < 5; i++) {
    starsOuter.push(<IoIosStarOutline key={key + i} />);
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
