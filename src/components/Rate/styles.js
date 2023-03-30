import styled from 'styled-components';
import { IoIosStar } from 'react-icons/io';


export const Container = styled.div`
  max-width: 100%;
  height: 1.2rem;
  margin: .8rem 0 1.5rem;
  
  display: flex;
  gap: .6rem;
  
  svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  .stars-outer {
    position: relative;
  }

  .stars-inner {
    position: absolute;
    white-space: nowrap;
    width: 0;
  }
`;