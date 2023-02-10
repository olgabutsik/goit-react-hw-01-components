import { FriendslistItem } from 'components/FriendslistItem';
import { FriendsAllList } from './Friends.styled';
export const Friends = ({ friends }) => {
  return (
    <FriendsAllList className="friend-list">
      {friends.map(friend => (
        <FriendslistItem
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
          key={friend.name}
        />
      ))}
    </FriendsAllList>
  );
};
