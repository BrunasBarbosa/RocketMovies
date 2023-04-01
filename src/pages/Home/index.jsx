import { Container, Content, Section, NewNote } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Scrollbar } from '../../components/Scrollbar';
import { EmptyData } from '../../components/EmptyData';
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { FiPlus } from 'react-icons/fi';

export function Home() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState([]);
  const [tagName, setTagName] = useState([]);

  const filterOn = title.length > 0 || tagName.length > 0;

  const inputSearch = document.querySelector('input');

  function handleRemoveFilter() {
    setTitle([]);
    setTagName([]);
    inputSearch.value = '';
  }

  function clearNoteDataLocal() {
    return localStorage.removeItem('@moviesnotes:note');
  }

  async function fetchNotes(title, tagName) {
    const { data } = await api.get(`/notes?title=${title}&tag=${tagName}`);

    setTitle(title);
    setTagName(tagName);
    return setNotes(data);
  }

  useEffect(() => {
    if (!filterOn) fetchNotes(title, tagName);
    clearNoteDataLocal();
  }, [title, tagName]);

  return (
    <Container>
      <Header fetch={fetchNotes} />

      <Section>
        <h1>Meus Filmes</h1>
        <div>
          {
            filterOn &&
            <ButtonText title={'Limpar filtros'} onClick={handleRemoveFilter} />
          }
          <NewNote to="/new">
            < FiPlus />
            Adicionar filme
          </NewNote>
        </div>
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