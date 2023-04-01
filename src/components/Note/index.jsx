import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { Rate } from '../Rate';
import { Tag } from '../Tag';

export function Note({ data, onClick, fetch, ...rest }) {
  const navigate = useNavigate();

  function handleDetails(id) {
    return navigate(`/details/${id}`);
  }

  return (
    <Container  {...rest}>
      <div onClick={() => handleDetails(data.id)}>
        <h1>{data.title}</h1>
        <Rate rate={data.rating} />
        <p>
          {data.description}
        </p>
      </div>
      {
        data.tags &&
        <footer>
          {data.tags.map(tag =>
            <Tag
              key={tag.id}
              title={tag.name}
              onClick={() => { fetch([], tag.name); }}
            />)}
        </footer>
      }
    </Container>
  );
};