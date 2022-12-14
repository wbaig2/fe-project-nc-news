import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { UserContext } from "./contexts/User";
import { useState } from "react";

function App() {
  const [username] = useState("tickle122");

  return (
    <UserContext.Provider value={{ username }}>
      <BrowserRouter>
        <div className="content">
          <Header />
          <Main />
          <Routes>
            <Route path="/*" element={<Articles />} />
            <Route path="/topics/:topic_slug" element={<Articles/>} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
