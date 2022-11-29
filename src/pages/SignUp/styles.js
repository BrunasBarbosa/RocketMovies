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
  filter: brightness(0.5);
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  
  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  > h2 {
    margin: 4.8rem 0;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > footer {
    margin-top: 4.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

     svg {
      margin-right: .8rem;
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.SALMON};
      }
  }
`;