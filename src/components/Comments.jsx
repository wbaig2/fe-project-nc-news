import { useContext, useEffect, useState } from "react";
import { fetchComments, deleteComment } from "../api";
import { UserContext } from "../contexts/User";

const Comments = ({ article_id, articleComments, setArticleComments }) => {
  const [loading, setLoading] = useState(true);
  const { username } = useContext(UserContext);
  const [deletedComment, setDeletedComment] = useState();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    fetchComments(article_id).then(({ comments }) => {
      setLoading(false);
      setArticleComments(comments);
    });
  }, [article_id, articleComments, setArticleComments, deletedComment]);

  const handleDelete = (event) => {
    setDisabled(true)
    setDeletedComment(event.target.value);
    deleteComment(event.target.value);
  };

  return (
    <>
      <p>{loading ? "Loading..." : ""}</p>
      {articleComments.map((articleComment) => {
        const date = new Date(articleComment.created_at).toLocaleString();
        return (
          <div className="comment" key={articleComment.comment_id}>
            <h4>{articleComment.author}</h4>
            <p>{articleComment.body}</p>
            <p>{date}</p>
            <p>Votes: {articleComment.votes}</p>
            {articleComment.author === username ? (
              <p align="right">
                <button
                  onClick={handleDelete}
                  value={articleComment.comment_id}
                  disabled={disabled}
                >
                  DELETE
                </button>
              </p>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default Comments;
