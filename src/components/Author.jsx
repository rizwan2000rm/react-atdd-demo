import { Link } from "react-router-dom";

const Author = ({ author, idx }) => {
  return (
    <div className="author">
      <img
        className="author-img"
        src="https://api.minimalavatars.com/avatar/random/png"
        alt="avatar"
      />
      <div className="author-info">
        <Link to={"/" + idx} className="author-link">
          {author.name}
        </Link>
        <p>{author.email}</p>
      </div>
    </div>
  );
};

export default Author;
