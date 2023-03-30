import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 1.2rem;
  margin: .8rem 0 1.5rem;
  position: relative;
  
  display: flex;
  gap: .6rem;
  
  svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  .stars-inner {
    position: absolute;
  }
`;