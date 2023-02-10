import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHeader,
  TableRow,
  TableCeil,
} from './Transaction.style';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable className="transaction-history">
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>
      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableCeil>{item.type}</TableCeil>
            <TableCeil>{item.amount}</TableCeil>
            <TableCeil>{item.currency}</TableCeil>
          </TableRow>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
