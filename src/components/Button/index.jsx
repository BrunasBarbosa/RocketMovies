import { Container } from './styles';

export function Button({ title, loading = false, ...rest }) {
  return(
    <Container
    type='button'
    disable={loading}
    {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}