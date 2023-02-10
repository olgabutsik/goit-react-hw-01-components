import PropTypes from 'prop-types';
import {
  CardProfile,
  CardDescription,
  CardAvatar,
  CardName,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile/Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <CardProfile className="profile">
      <CardDescription className="description">
        <CardAvatar src={avatar} alt={username} className="avatar" />
        <CardName className="name">{username}</CardName>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </CardDescription>

      <StatsList className="stats">
        <StatsItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </StatsItem>

        <StatsItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </StatsItem>

        <StatsItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </CardProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
