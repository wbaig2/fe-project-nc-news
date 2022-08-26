import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../api";

const Main = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then(({ data }) => {
      setTopics(data.topics);
    });
  }, []);

  return (
    <>
      <div>
        <ul className="ul-topics">
          <li className="li-topics"><Link to={`/`} className="button-topics">All Articles</Link></li>
          {topics.map((topic) => {
            return (
              <li className="li-topics" key={topic.slug}>
                <Link to={`/topics/${topic.slug}`} className="button-topics">
                  {topic.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Main;
