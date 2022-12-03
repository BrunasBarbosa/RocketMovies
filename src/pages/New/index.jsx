import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { Container, Delete } from './styles';

export function New() {
  return (
    <Container>
      <Header />

      <Return/>

      <main>
        <h1>Novo filme</h1>

        <section>
          <Input placeholder="Título"/>
          <Input placeholder="Sua nota(de 0 a 5)"/>
        </section>

        <Textarea placeholder="Observações"/>

        <h2>Marcadores</h2>

        <div className="tags">
          <NoteItem value="Astronauta"/>
          <NoteItem isNew placeholder="Novo marcador"/>
        </div>

        <section>
          <Delete>
            Excluir filme
          </Delete>
          <Button title="Salvar alterações"/>
        </section>
      </main>
    </Container>
  )
}