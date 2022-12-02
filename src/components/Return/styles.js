import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  gap: .8rem;
  align-items: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.SALMON};
    
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`
