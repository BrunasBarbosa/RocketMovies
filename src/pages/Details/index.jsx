import { Scrollbar } from '../../components/Scrollbar';
import { DataNote } from '../../components/DataNote';
import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Container, Content } from './styles';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { ButtonDelete } from '../../components/ButtonDelete';
import { Button } from '../../components/Button';

export function Details({ ...rest }) {
  const params = useParams();
  const [data, setData] = useState(null);

  const { user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder;

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container {...rest}>
      <Header />

      <Return />

      <Scrollbar>
        <Content>
          {
            data &&
            <DataNote data={{
              title: data.title,
              user_avatar: avatarURL,
              user_name: user.name,
              created_at: data.created_at,
              tags: data.tags,
              description: data.description
            }} />}
        </Content>
      </Scrollbar>
      <section>
        <ButtonDelete title='Excluir' />
        <Button title='Editar' />
      </section>
    </Container>
  );
};
