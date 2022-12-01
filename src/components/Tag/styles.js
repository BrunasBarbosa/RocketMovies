import styled from 'styled-components';

export const Container = styled.span`
  padding: .5rem 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius:.8rem;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 1.2rem;
`;