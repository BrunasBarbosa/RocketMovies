import { Textarea } from '../../components/Textarea';
import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Delete } from './styles';

export function New() {
  return (
    <Container>
      <Header />

      <Return/>

      <main>
        <h1>Novo filme</h1>

        <div className='title'>
          <Input placeholder="Título"/>
          <Input placeholder="Sua nota(de 0 a 5)"/>
        </div>

        <Textarea placeholder="Observações"/>

        <h2>Marcadores</h2>
        
        <Delete>
          Excluir filme
        </Delete>
        <Button title="Salvar alterações"/>
      </main>
    </Container>
  )
}