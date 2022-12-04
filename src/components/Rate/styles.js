import styled from 'styled-components';

export const Container = styled.div`
  margin: .8rem 0 1.5rem;
  display: flex;
  gap: .6rem;
  width: 100%;
  height: 1.2rem;
  
  > svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;