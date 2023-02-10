import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics/Statistics.styled';
import { getRandomHexColor } from './styles/randomHexColor';

export function Statistics({ title, stats }) {
  return (
    <StatisticsSection className="statistics">
      {title && <StatisticsTitle className="title">{title}</StatisticsTitle>}
      <StatList className="stat-list">
        {stats.map(item => (
          <StatItem
            key={item.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <Label className="label">{item.label}</Label>
            <Percentage className="percentage">{item.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
