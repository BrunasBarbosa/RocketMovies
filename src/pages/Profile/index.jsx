import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';
import { Button } from '../../components/Button';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';

export function Profile() {
  return (
    <Container>
      <header>
        <Return />
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/brunasbarbosa.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar" >
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          icon={FiUser}
          type="text"
        />

        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="text"
        />

        <Input
          placeholder="Senha atual"
          icon={FiLock}
          type="password"
        />

        <Input
          placeholder="Nova senha"
          icon={FiLock}
          type="password"
        />

        <Input
          placeholder="Confirme a senha"
          icon={FiLock}
          type="password"
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
};