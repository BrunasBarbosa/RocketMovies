import { Container } from './styles';
import { Rate } from '../Rate';
import { Tag } from '../Tag';

export function Note({ data, ...rest }) {
  return (
    <Container  {...rest}>
      <div className='summary'>
        <h1>{data.title}</h1>
        <Rate rate={data.rating} />
        <p>
          {data.description}
        </p>
      </div>
      <div >
        {
          data.tags &&
          <footer>
            {data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)}
          </footer>
        }
      </div>
    </Container>
  );
};