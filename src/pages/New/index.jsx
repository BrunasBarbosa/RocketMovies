import { Scrollbar } from '../../components/Scrollbar';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { Container, Delete, Content } from './styles';

export function New() {
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
            <NoteItem value="React" />
            <NoteItem isNew placeholder="Novo marcador" />
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
  )
}