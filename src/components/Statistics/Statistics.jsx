import { Statistics } from 'components/Statistics';

export const StatisticsApp = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <li>
          <Statistics stats={data} />
        </li>
      ))}
    </ul>
  );
};
