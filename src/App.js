import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';

function App() {
  return (
    <BrowserRouter>
    <div className="content">
        <Header />
        <Main />
        <Routes>
          <Route path="/*" element={<Articles />} />
            <Route path="/topics/:topic_slug" element={<Articles />} />            
        </Routes>
     
      
      </div>
    </BrowserRouter>
  );
}

export default App;
