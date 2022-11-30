import { Container, Content, Section, NewNote } from './styles';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  return (
    <Container>
      <Header />

      <Section>
        <h1>Meus Filmes</h1>
        <div>
          < FiPlus />
          Adicionar filme
        </div>
      </Section>

      <Content>

      </Content>

    </Container>

  )
}