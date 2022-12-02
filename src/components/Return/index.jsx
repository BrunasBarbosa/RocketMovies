import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

export function Return() {
  return (
    <Container to="/" >
      <FiArrowLeft />
          Voltar
    </Container>
  )
}