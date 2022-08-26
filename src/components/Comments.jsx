import { useEffect, useState } from "react";
import { fetchComments } from "../api";

const Comments = ({ article_id, articleComments, setArticleComments }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments(article_id).then(({ comments }) => {
      setLoading(false);
      setArticleComments(comments);
    });
  }, [article_id, articleComments, setArticleComments]);

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
          </div>
        );
      })}
    </>
  );
};

export default Comments;
