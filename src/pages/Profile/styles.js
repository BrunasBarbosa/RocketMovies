import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    padding: 0 14.4rem;

    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    a {
      display: flex;
      gap: .8rem;
      align-items: center;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.SALMON};
    }
    
    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 34rem;
  margin: 6.4rem auto;
  gap: .8rem;

  > div:nth-child(4) {
    margin-top: 1.6rem;
  }

  > button {
    margin-top: 1.6rem;
  }
`;

export const Avatar = styled.div`
  margin: -16rem auto 3.2rem;
  position: relative;

    width: 18.6rem;
    height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;

    width: 4.8rem;
    height: 4.8rem;
    
    background-color: ${({ theme }) => theme.COLORS.SALMON};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    right: .7rem;
    bottom: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
  }
`;