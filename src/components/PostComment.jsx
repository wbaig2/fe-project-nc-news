import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";
import { UserContext } from "../contexts/User";

const PostComment = ({ articleComments, setArticleComments }) => {
  const { article_id } = useParams();
  const { username } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [posting, setPosting] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const addComment = (event) => {
    event.preventDefault();
    setDisabled(true);
    setPosting(true);
    postComment(article_id, username, comment).then(({comment}) => {
      console.log(comment)
  
      setArticleComments([comment, ...articleComments]);
      setDisabled(false);
      setPosting(false);
      setComment("");
    });
  };

  const setNewComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <>
      <p>{posting ? "Posting your comment..." : ""}</p>
      <form onSubmit={addComment}>
        <label htmlFor="comment">
          Comment:
          <p>
            <textarea
              id="comment"
              name="comment"
              onChange={setNewComment}
              className="new-comment-box"
              cols="75"
              rows="8"
              required
              value={comment}
              disabled={disabled}
            ></textarea>
          </p>
        </label>

        <p align="center">
          <button
            name="add-comment-btn"
            className="toggle-comments-btn"
            disabled={disabled || !comment}
          >
            {comment ? "Add Comment" : "Type your comment above ^"}
          </button>
        </p>
      </form>
    </>
  );
};

export default PostComment;
