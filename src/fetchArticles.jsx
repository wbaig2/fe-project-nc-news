import axios from "axios"

const fetchArticles = async () => {
    const articles = await axios.get('https://wb-news.herokuapp.com/api/articles') 
    return articles
}

export default fetchArticles