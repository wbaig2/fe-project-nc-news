import { fetchSingleArticle } from "../api";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Votes from "./Votes";
import Comments from "./Comments";
import PostComment from "./PostComment";
import { UserContext } from "../contexts/User";

const SingleArticle = () => {
  const { article_id } = useParams();
  const { username } = useContext(UserContext);
  const [singleArticle, setSingleArticle] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetchSingleArticle(article_id).then(({ article }) => {
      setSingleArticle(article);
    });
  }, [article_id]);

  const toggleShowComments = () => {
    setShowComments((currShowComments) => {
      return !currShowComments;
    });
  };

  const date = new Date(singleArticle.created_at).toLocaleString();

  return (
    <>
      <div className="article-single" key={singleArticle.article_id}>
        <h3>{singleArticle.title}</h3> - {singleArticle.topic}
        <p> {singleArticle.body}</p>
        <p>
          by {singleArticle.author}, on {date}
        </p>
        <Votes
          votes={singleArticle.votes}
          article_id={singleArticle.article_id}
        />
      </div>
      {username ? <PostComment articleComments={articleComments} setArticleComments={setArticleComments} /> : null}
      <p align="center">
        <button className="toggle-comments-btn" onClick={toggleShowComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </p>
      {showComments ? <Comments article_id={article_id} articleComments={articleComments} setArticleComments={setArticleComments} /> : null}
    </>
  );
};

export default SingleArticle;
