import { Container } from './styles';

export function Scrollbar({ id, children, ...rest }){
  return (
    <Container 
    id="scrollbar"
    {...rest}>
      {children}
    </Container>
  )
};

