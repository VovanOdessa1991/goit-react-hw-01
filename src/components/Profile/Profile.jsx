import css from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={css.userCard}>
      <div className={css.user}>
        <img className={css.userIMG} src={props.image} alt="User avatar" />
        <p>{props.name}</p>
        <p>{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul className={css.userStats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
