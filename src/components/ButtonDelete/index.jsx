import { Container } from './styles';

export function ButtonDelete({ title, ...rest }) {
  return(
    <Container
      type='button'
      {...rest}
    >
      {title}
    </Container>
  )
}

