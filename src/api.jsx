import axios from "axios"

export const fetchArticles = async (topic_slug) => {
  try {
    const articlesByTopic = await axios.get(`https://wb-news.herokuapp.com/api/articles`, { params: { topic: topic_slug} });
      return articlesByTopic.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTopics = async () => {
  try {
    const topics = await axios.get(`https://wb-news.herokuapp.com/api/topics`);
    return topics;
  } catch (error) {
    console.log(error);
  }
};


export const fetchSingleArticle = async (article_id) => {
  try {
    const singleArticle = await axios.get(`https://wb-news.herokuapp.com/api/articles/${article_id}`);
      return singleArticle.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateArticleVotes = async (article_id, changeVotesBy) => {
  const voteUpdate = { inc_votes: changeVotesBy };
  try {
    const updateVotes = await axios.patch(`https://wb-news.herokuapp.com/api/articles/${article_id}`, voteUpdate);
    return updateVotes.data;
  } catch (error) {
    console.log(error)
  }
}

