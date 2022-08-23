import { fetchArticles } from "../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Articles = () => {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles(topic_slug).then(( {articles} ) => {
      setArticles(articles);
    });
  }, [topic_slug]);

  return (
    <>
      {articles.map((article) => {
        const date = new Date(article.created_at).toLocaleString();
        return (
          <div key={article.article_id} className="article">
            <p>
              by {article.author}, on {date}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Articles