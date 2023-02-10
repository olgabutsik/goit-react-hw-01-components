import styled from '@emotion/styled';

export const FriendsAllList = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const FriendsItem = styled.li`
  display: flex;
  flex-direction: row;
  text-align: center;
    justify-content: center;
    text-align: center;
  width: ${({ theme }) => theme.spacing(70)};
  height: : 100px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing(4)};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: 700px) {
    width: ${({ theme }) => theme.spacing(200)};
    background: ${({ theme }) => theme.colors.light};

  }
`;

export const FriendsStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-right: ${({ theme }) => theme.spacing(4)};
`;

export const FriendsAvatar = styled.img`
  width: ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const FriendsName = styled.p`
  color: dark;
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing(3)};
`;
