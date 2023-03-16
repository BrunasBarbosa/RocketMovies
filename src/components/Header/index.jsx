import { Container, Profile } from './styles';
import { ButtonText } from '../ButtonText';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';
import { Input } from '../Input';

export function Header() {

  const { signOut } = useAuth()
  return (
    <Container>
      <h2>RocketMovies</h2>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <Link to="/profile" className="name">Bruna Barbosa</Link>
          <ButtonText title="sair" onClick={signOut}/>
        </div>

        <Link to="/profile" className="profile">
          <img
            src='https://github.com/brunasbarbosa.png'
            alt='Foto do usuário'
          />
        </Link>
      </Profile>
    </Container>
  )
};