import PropTypes from 'prop-types';
import {
  FriendsItem,
  FriendsStatus,
  FriendsAvatar,
  FriendsName,
} from './Friends/Friends.styled';
import styled from '@emotion/styled';

export const FriendslistItem = ({ avatar, name, status }) => {
  return (
    <FriendsItem className="item">
      <FriendsStatus
        className={
          status
            ? styled`
                background: ${({ theme }) => theme.colors.green};
              `
            : styled`
                background: ${({ theme }) => theme.colors.red};
              `
        }
      ></FriendsStatus>
      <FriendsAvatar className="avatar" src={avatar} alt={name} width="48" />
      <FriendsName className="name">{name}</FriendsName>
    </FriendsItem>
  );
};

FriendslistItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  id: PropTypes.number,
};