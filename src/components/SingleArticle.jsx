import { fetchSingleArticle } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Votes from "./Votes";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});

  useEffect(() => {
    fetchSingleArticle(article_id).then(({ article }) => {
      setSingleArticle(article);
    });
  }, [article_id]);

  const date = new Date(singleArticle.created_at).toLocaleString();

  return (
    <div className="article-single" key={singleArticle.article_id}>
      <h3>{singleArticle.title}</h3> - {singleArticle.topic}
      <p> {singleArticle.body}</p>
      <p>
        by {singleArticle.author}, on {date}
      </p>
      <Votes votes={singleArticle.votes} article_id={singleArticle.article_id} />
    </div>
  );
};

export default SingleArticle;
