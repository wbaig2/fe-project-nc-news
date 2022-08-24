import { updateArticleVotes } from "../api";
import { useState } from "react";

const Votes = ({ votes, article_id }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [err, setErr] = useState(null);

  const upVote = () => {
    const changeVotesBy = 1;

    setOptimisticVotes((currOptimisticVotes) => {
      setErr(null);
      return currOptimisticVotes + changeVotesBy;
    });
    updateArticleVotes(article_id, changeVotesBy).catch(
      (currOptimisticVotes) => {
        setErr("Something went wrong, please try again.");
        return currOptimisticVotes - changeVotesBy;
      }
    );
  };

  const downVote = () => {
    const changeVotesBy = -1;

    setOptimisticVotes((currOptimisticVotes) => {
      setErr(null);
      return currOptimisticVotes + changeVotesBy;
    });
    updateArticleVotes(article_id, changeVotesBy).catch(
      (currOptimisticVotes) => {
        setErr("Something went wrong, please try again.");
        return currOptimisticVotes + changeVotesBy;
      }
    );
  };

  if (err) return <p>{err}</p>;

  return (
    <>
      <div>Votes: {votes + optimisticVotes}</div>
      <button onClick={upVote}>👍</button>{" "}
      <button onClick={downVote}>👎</button>
    </>
  );
};

export default Votes;
