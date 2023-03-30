import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 12.4rem 0;
  overflow-y: auto;
  width: clamp(54rem,38rem + 60vw,130rem);
  margin: 0 auto 4rem;

  ::-webkit-scrollbar {
    margin-right: 5rem;
    width: .8rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    
  }

  ::-webkit-scrollbar-thumb {
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.SALMON};
  }

  ::-webkit-scrollbar-thumb:hover {
    filter: brightness(0.9);
  }
`;