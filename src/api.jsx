import axios from "axios"

export const fetchArticles = async (topic, sort_by, order_by) => {
  try {
    const articlesByTopic = await axios.get(`https://wb-news.herokuapp.com/api/articles`, { params: { topic, sort_by, order_by } });
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

export const fetchComments = async (article_id) => {
  try {
    const getComments = await axios.get(`https://wb-news.herokuapp.com/api/articles/${article_id}/comments`);
    return getComments.data;
  } catch (error) {
    console.log(error)
  }
}

export const postComment = async (article_id, username, body) => {
  try {
    const addComment = await axios.post(`https://wb-news.herokuapp.com/api/articles/${article_id}/comments`, { username, body } );
    return addComment.data;
  } catch (error) {
    console.log(error)
  }
}

export const deleteComment = async (comment_id) => {
  try {
    await axios.delete(`https://wb-news.herokuapp.com/api/comments/${comment_id}` );
  } catch (error) {
    console.log(error)
  }
}