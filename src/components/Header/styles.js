import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6.4rem;

  padding: 2.4rem 12.4rem;

  width: 100%;
  height: 11.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

  > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items:center;
  gap: 9px;

  > div:first-child { 
    width: 12.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    .name {
      line-height: 18.46px;
      font-weight: 700;
      grid-area: name;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  } 

  .profile { 
     img {
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }
  } 
`;
