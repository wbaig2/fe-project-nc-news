import { fetchArticles } from "../api"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const Articles = () => {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles(topic_slug).then(( {articles} ) => {
      setArticles(articles);
    });
  }, [topic_slug]);

  return (
    <div className="article-container">
      {articles.map((article) => {
        const date = new Date(article.created_at).toLocaleString();
        return (
          <Link to={`/articles/${article.article_id}`}>
            <div className="article" key={article.article_id}>
              <h3>{article.title}</h3> - {article.topic}
              <p className="article-body"> {article.body.substr(0, 229) + "..."}</p>
              <p>
                by {article.author}, on {date}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Articles