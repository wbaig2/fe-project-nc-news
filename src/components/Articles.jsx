import { fetchArticles } from "../api"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const Articles = () => {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([])
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState('desc')

  useEffect(() => {
    fetchArticles(topic_slug, sortBy, order).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topic_slug, sortBy, order]);

  const handleRadioChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleCBChange = (event) => {
    if (event.target.checked) {
      setOrder(event.target.value);
    } else {
      setOrder('desc');
    }
  };

  return (
    <>
      <form>
        <label htmlFor="date">Date</label>
        <input className="sort-inputs" onChange={handleRadioChange} type="radio" value="created_at" name="sort" id="date" checked={sortBy === "created_at"} />
        
        <label htmlFor="date">Comments</label>
        <input className="sort-inputs" onChange={handleRadioChange} type="radio" value="comment_count" name="sort" id="comments" checked={sortBy === "comment_count"}/>
        
        <label htmlFor="date">Votes</label>
        <input className="sort-inputs" onChange={handleRadioChange} type="radio" value="votes" name="sort" id="votes" checked={sortBy === "votes"}/>
        
        <label htmlFor="date">Ascending Order</label>
        <input className="sort-inputs" onChange={handleCBChange} type="checkbox" value="asc" name="order" id="asc"/>
      </form>

      <div className="article-container">
        {articles.map((article) => {
          const date = new Date(article.created_at).toLocaleString();
          return (
            <div key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <div className="article" key={article.article_id}>
                  <h3>{article.title}</h3> - {article.topic}
                  <p className="article-body">
                    {" "}
                    {article.body.substr(0, 229) + "..."}
                  </p>
                  <p>
                    by {article.author}, on {date}
                  </p>
                  <p>
                    Votes: {article.votes} ---- Comments: {article.comment_count} 
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Articles