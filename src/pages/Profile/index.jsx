import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';
import { Button } from '../../components/Button';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useState } from 'react';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);


  async function handleUpdate() {
    const updated = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword,
      confirm_password: confirmedPassword
    };

    const userUpdated = Object.assign(user, updated);

    setOldPassword('');
    setNewPassword('');
    setConfirmedPassword('');

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);

    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Return />
      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto do usuário"
          />

          <label htmlFor="avatar" >
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          icon={FiUser}
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          icon={FiLock}
          type="password"
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          icon={FiLock}
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Input
          placeholder="Confirme a senha"
          icon={FiLock}
          type="password"
          value={confirmedPassword}
          onChange={e => setConfirmedPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
};