import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;
  padding: 2.4rem 12.4rem;

  display: flex;
  align-items: center;
  gap: 6.4rem;

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
      grid-area: name;

      font-size: 1.4rem;
      font-weight: 700;
      line-height: 18.46px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  } 

  .profile { 
     img {
      width: 6.4rem;
      height: 6.4rem;
      
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border-radius: 50%;
      object-fit: cover;
    }
  } 
`;
