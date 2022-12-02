import { Container, Content, Section, NewNote } from './styles';
import { Header } from '../../components/Header';
import { FiPlus } from 'react-icons/fi';
import { Note } from '../../components/Note';

export function Home() {
  return (
    <Container>
      <Header />

        <Section>
          <h1>Meus Filmes</h1>
          <NewNote to="/new">
            < FiPlus />
            Adicionar filme
          </NewNote>
        </Section>

      <main>
        <Content>
          <Note data={{
            title: 'Interestelar', tags: [
              { id: 1, name: 'Ficção científica' },
              { id: 2, name: 'Drama' },
              { id: 3, name: 'Família' },
            ]
          }} />

          <Note data={{
            title: 'Interestelar', tags: [
              { id: 1, name: 'Ficção científica' },
              { id: 2, name: 'Drama' },
              { id: 3, name: 'Família' },
            ]
          }} />

          <Note data={{
            title: 'Interestelar', tags: [
              { id: 1, name: 'Ficção científica' },
              { id: 2, name: 'Astronauta' },
            ]
          }} />
        </Content>
      </main>
    </Container>

  )
}