import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.FriendListItem}>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>Friend name{name}</p>

        <p className={clsx(css.status, isOnline && css.isOnline)}>
          Friend status
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
