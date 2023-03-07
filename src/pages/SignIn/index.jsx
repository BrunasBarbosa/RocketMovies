import { ButtonText } from '../../components/ButtonText';
import { Container, Background, Form } from './styles';
import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useState } from 'react';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    if (!email || !password) {
      return alert('Preencha todos os campos.');
    }

    api.post('/sessions', { email, password })
      .then(() => {

      })
      .catch(error => {
        if (error.response) {
          return alert(error.response.data.message);
        } else {
          return alert('Não foi possível entrar.');
        }
      });
  }
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">
          <ButtonText title="Criar conta" />
        </Link>
      </Form>

      <Background />
    </Container>
  );
};