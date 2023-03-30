import clapperImg from '../../assets/movie-clapper-open-svgrepo-com.svg';
import { Container } from './styles';

export function EmptyData() {
  const clapperIcon = clapperImg;

  return (
    <Container>
      <p>
        Você ainda não possui filmes cadastrados.
      </p>

      <img src={clapperIcon} alt='Imagem de um clapper.' />
    </Container>
  );
}