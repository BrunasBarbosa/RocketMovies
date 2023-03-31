import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useNavigate } from 'react-router-dom';
import { Container, Profile } from './styles';
import { ButtonText } from '../ButtonText';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { Input } from '../Input';

export function Header({ fetch }) {
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  return (
    <Container>
      <h2>RocketMovies</h2>

      <Input
        placeholder="Pesquisar pelo título"
        onChange={e => { fetch(e.target.value, []) }}
      />

      <Profile>
        <div>
          <Link to="/profile" className="name">{user.name}</Link>
          <ButtonText title="sair" onClick={handleSignOut} />
        </div>

        <Link to="/profile" className="profile">
          <img
            src={avatarURL}
            alt='Foto do usuário'
          />
        </Link>
      </Profile>
    </Container>
  );
};