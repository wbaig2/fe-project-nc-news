import fetchArticles from "../fetchArticles"
import { useEffect, useState } from  "react"

const Articles = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles().then(({ data }) => {
      setArticles(data.articles)
    }, [])
  })

  return (
    <>
      {articles.map((article) => {
        const date = new Date(article.created_at).toLocaleString();
        return (
          <div className="article">
            <p> {article.title} - {article.topic} </p>
            <p> {article.body}</p>
            <p>by {article.author}, on {date}</p>
          </div>
        );
    })}
    </>
  )
}

export default Articles