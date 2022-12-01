import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';


export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
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

        
      </Form>
    </Container>
  );
}