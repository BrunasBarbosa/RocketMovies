import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 1.2rem;
  margin: .8rem 0 1.5rem;
  
  display: flex;
  gap: .6rem;
  
  > svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;