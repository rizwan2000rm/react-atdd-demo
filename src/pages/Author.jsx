import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Author = () => {
  let { authorId } = useParams();
  const [author, setAuthor] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/authors/" + authorId)
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, []);

  return (
    <div className="author">
      <img
        className="author-img"
        src="https://api.minimalavatars.com/avatar/random/png"
        alt="avatar"
      />
      <div className="author-info">
        <h3 className="author-title">{author?.name}</h3>
        <p>{author?.email}</p>
      </div>
    </div>
  );
};

export default Author;
