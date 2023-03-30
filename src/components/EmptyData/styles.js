import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40rem;
  margin: 0 auto;
  padding: 5.6rem;
  gap: 2.4rem;
  border-radius: 8px;

  display: flex;
  
  align-items: center;

  p {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    font-family: 'Roboto Slab', serif;
  }

  img {
    width: 32rem;
  }
`;