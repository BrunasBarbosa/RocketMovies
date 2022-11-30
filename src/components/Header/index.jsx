import { Container, Profile } from './styles';
import { ButtonText } from '../ButtonText';
import { Link } from 'react-router-dom';
import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <Link className="name">Bruna Barbosa</Link>
          <ButtonText title="sair" />
        </div>

        <Link className="profile">
          <img
            src='https://github.com/brunasbarbosa.png'
            alt='Foto do usuário'
          />
        </Link>
      </Profile>
    </Container>
  )
}