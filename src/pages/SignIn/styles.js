import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness();
`;

export const Form = styled.form`
  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;