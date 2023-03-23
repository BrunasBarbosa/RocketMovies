import { Scrollbar } from '../../components/Scrollbar';
import { Container, Delete, Content } from './styles';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { useState } from 'react';

export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  return (
    <Container>
      <Header />

      <Return />

      <Scrollbar>
        <Content>
          <h1>Novo filme</h1>

          <section>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota(de 0 a 5)" />
          </section>

          <Textarea placeholder="Observações" />

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
            <Button title="Salvar alterações" />
          </section>
        </Content>
      </Scrollbar>
    </Container>
  );
};