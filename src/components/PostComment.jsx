import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";
import { UserContext } from "../contexts/User";

const PostComment = ({articleComments, setArticleComments}) => {
  const { article_id } = useParams();
  const { username } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  const addComment = (event) => {
    event.preventDefault();
    postComment(article_id, username, newComment).then(() => {
      setArticleComments([newComment, ...articleComments]);
    });
  };

  const setComment = (event) => {
    setNewComment(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form onSubmit={addComment}>
      <label htmlFor="comment">Comment:
        <p>
          <textarea
        id="comment"
        name="comment"
        onChange={setComment}
        className="new-comment-box"
        cols="75"
        rows="8"
        required
      ></textarea>
      </p>
      
      </label>
      
      <p align="center">
        <button className="toggle-comments-btn">Add Comment</button>
      </p>
    </form>
  );
};

export default PostComment;
