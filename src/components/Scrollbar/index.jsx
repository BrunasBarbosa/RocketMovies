import { Container } from './styles';

export function Scrollbar({ children, ...rest }) {
  return (
    <Container
      {...rest}
      >
        {children}
    </Container>
  )
};

