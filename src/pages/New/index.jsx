import { Scrollbar } from '../../components/Scrollbar';
import { Container, Delete, Content } from './styles';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useState } from 'react';

export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const [title, setTitle] = useState('');
  const [rate, setRate] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();
  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Você não inseriu um título à nota.');
    }

    if (newTag) {
      return alert('Você não salvou os dados inseridos nos marcadores, complete a ação ou remova os dados.');
    }

    await api.post('/notes', {
      title,
      rating: rate,
      description,
      tags
    });

    alert('Nota cadastrada com sucesso.');
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <Return />

      <Scrollbar>
        <Content>
          <h1>Novo filme</h1>

          <section>
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota(de 0 a 5)"
              onChange={e => setRate(e.target.value)}
            />
          </section>

          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <h2>Marcadores</h2>

          <div className="tags">
            <NoteItem
              isNew
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
            {
              tags.map((tag, index) =>
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />)
            }
          </div>

          <section>
            <Delete type="button">
              Excluir filme
            </Delete>
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </section>
        </Content>
      </Scrollbar>
    </Container>
  );
};