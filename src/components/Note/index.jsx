import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Rate } from '../Rate';
import { Tag } from '../Tag';

export function Note({ data, ...rest }) {
  return (
    <Container  {...rest}>
      <Link to="/details/:id">
        <h1>{data.title}</h1>
        <Rate />
        <p>
          {data.description}
        </p>
        {
          data.tags &&
          <footer>
            {data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)}
          </footer>
        }
      </Link>
    </Container>
  )
};