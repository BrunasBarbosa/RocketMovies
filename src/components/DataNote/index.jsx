import { Container, Title, User, Date } from './styles';
import { Rate } from '../../components/Rate';
import { Tag } from '../../components/Tag';
import { FiClock } from 'react-icons/fi';

export function DataNote({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Title>
        <h1>{data.title}</h1>
        <Rate />
      </Title>

      <div className="details">
        <User>
          <img src={data.user_avatar} alt={`Foto de ${data.user_name}`} />
          <span>Por {data.user_name}</span>
        </User>
        
        <Date>
          <FiClock />
          <span>{data.created_at}</span>
        </Date>
      </div>

      {
        data.tags &&
        <footer>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)}
        </footer>
      }

      <p>{data.description}</p>
    </Container>
  )
}