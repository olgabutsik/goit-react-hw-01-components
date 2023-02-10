import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing(10)};
  width: ${({ theme }) => theme.spacing(100)};
  background: ${({ theme }) => theme.colors.white};
`;

export const StatisticsTitle = styled.h2`
  margin-top: ${({ theme }) => theme.spacing(5)};
  text-align: center;
  color: grey;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(4)};

  font-size: small;
  font-weight: 400;
  color: white;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(20)};
`;

export const Label = styled.span`
  font-size: medium;
`;

export const Percentage = styled.span`
  font-size: large;
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing(2)};
`;
