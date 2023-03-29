import { Container, Content, Section, NewNote } from './styles';
import { Scrollbar } from '../../components/Scrollbar';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { Note } from '../../components/Note';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  const [notes, setnotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    return navigate(`/details/${id}`);
  }

  function clearDataNoteLocal() {
    return localStorage.removeItem('@moviesnotes:note');
  }

  async function fetchNotes(title) {
    const response = await api.get(`/notes?title=${title}`);
    setnotes(response.data);
  }

  useEffect(() => {
    const response = fetchNotes(notes);
    setnotes(response.data);
    clearDataNoteLocal();
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
          {notes &&
            notes.map((movie) =>
              <Note
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            )
          }
        </Content>
      </Scrollbar>
    </Container>
  );
};