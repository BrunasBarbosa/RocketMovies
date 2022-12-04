import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.GRAY_000};

  footer {
    font-family: 'Roboto', sans-serif;
    display: flex;
    gap: .8rem;
    margin: 4rem 0;

    span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      padding: .8rem 1.6rem;
    }
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 500;
  }

  .details {
    display: flex;
    gap: .8rem;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.6rem;
    line-height: 2rem;
    text-align: justify;
  }
`;

export const Title = styled.div`
  height: 4.7rem;
  display: flex;
  align-items: center;
  gap: 1.9rem;
  margin-bottom: 2.4rem;

svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  
  > img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  
  > svg:nth-child(1) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;