import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

export function Return({ onClick, ...rest }) {
  const navigate = useNavigate();
  
  function handleBack(){
    navigate(-1);
  }
  
  return (
    <Container
      onClick={handleBack}
      {...rest}
    >
      <FiArrowLeft />
      Voltar
    </Container>
  )
};