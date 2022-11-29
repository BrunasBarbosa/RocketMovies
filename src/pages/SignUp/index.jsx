import { ButtonText } from '../../components/ButtonText';
import { FiMail, FiLock, FiUser, FiArrowDownLeft, FiArrowLeft } from 'react-icons/fi';
import { Container, Background, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
// import { Link } from 'react-router-dom';

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Cadastrar"/>

        <footer>
          <FiArrowLeft/>
          <ButtonText title="Voltar para o login"/>
        </footer>
      </Form>


      <Background />
    </Container>
  )
}