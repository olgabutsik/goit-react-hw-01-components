import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin-top: ${({ theme }) => theme.spacing(20)};
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid grey;
  border-collapse: collapse;
`;
export const TableHeader = styled.thead`
  text-align: center;
  background: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  font-size: medium;
  font-weight: 400;
  color: white;
`;

export const TableRow = styled.tr`
  text-align: center;
  font-size: small;
  font-weight: 400;
  color: grey;
  :nth-child(even) {
    background: ${({ theme }) => theme.colors.light};
  
`;

export const TableCeil = styled.td`
  text-align: center;
  font-size: small;
  font-weight: 400;
  color: grey;
  border: 1px solid grey;
  text-transform: capitalize;
  padding: ${({ theme }) => theme.spacing(1)};
`;
