import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../images/default-avatar.svg";
import s from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={s.item}>
    {isOnline ? (
      <span className={s.online}>{isOnline}</span>
    ) : (
      <span className={s.offline}>{isOnline}</span>
    )}
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
