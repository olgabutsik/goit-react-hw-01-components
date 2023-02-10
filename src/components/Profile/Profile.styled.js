import styled from '@emotion/styled';

export const CardProfile = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ theme }) => theme.spacing(100)};

  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing(4)};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: 700px) {
    width: ${({ theme }) => theme.spacing(200)};
    background: ${({ theme }) => theme.colors.light};
  }
`;

export const CardDescription = styled.div`
background: : ${({ theme }) => theme.colors.grey}`;

export const CardAvatar = styled.img`
  object-fit: cover;
  width: 100px;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
`;

export const CardName = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
  font-size: large;
  font-weight: 700;
`;

export const Tag = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
  font-size: small;
  font-weight: 400;
  color: grey;
`;

export const Location = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
  font-size: small;
  font-weight: 500;
  color: grey;
`;

export const StatsList = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
  font-size: small;
  font-weight: 400;
  color: grey;
  border: 1px solid grey;
  border-bottom-left-radius: ${({ theme }) => theme.spacing(4)};
  border-bottom-right-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.light};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: medium;
`;
export const Quantity = styled.span`
  font-size: large;
  padding: ${({ theme }) => theme.spacing(2)};
  font-weight: bold;
  color: #000000;
`;
