import { Container, Content, Section, NewNote } from './styles';
import { Scrollbar } from '../../components/Scrollbar';
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { FiPlus } from 'react-icons/fi';
import { EmptyData } from '../../components/EmptyData';

export function Home() {
  const [notes, setNotes] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function clearNoteDataLocal() {
    return localStorage.removeItem('@moviesnotes:note');
  }

  async function fetchNotes(title, tag) {
    const { data } = await api.get(`/notes?title=${title}&tag=${tag}`);

    setNotes(data);
    setTagsSelected(tag);
  }

  useEffect(() => {
    fetchNotes(notes, tagsSelected);
    clearNoteDataLocal();
  }, []);

  return (
    <Container>
      <Header fetch={fetchNotes} />

      <Section>
        <h1>Meus Filmes</h1>
        <NewNote to="/new">
          < FiPlus />
          Adicionar filme
        </NewNote>
      </Section>

      <Scrollbar>
        <Content>
          {
            notes.length > 0 ?
              notes.map((movie) => (
                <Note
                  fetch={fetchNotes}
                  key={String(movie.id)}
                  data={movie}
                />
              ))
              :
              <EmptyData />
          }
        </Content>
      </Scrollbar>
    </Container>
  );
};