import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import apikey from './data/config';
import NewsContent from './components/NewsContent';
import Footer from './components/Footer';


function App() {

  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");

const newsApi = async () => {
  try {
    const news = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&pageSize=${loadMore}&category=${category}`
    );
    // console.log(news);
    setNewsArray(news.data.articles);
    setNewsResults(news.data.totalResults);
  } catch (error) {
    console.log(error);
  }
};

console.log(newsArray);

useEffect(() => {
  newsApi();
  // eslint-disable-next-line
}, [newsResults, loadMore, category]);


  return (
    <div className="App">
      <NavBar setCategory = {setCategory}/>
      <NewsContent newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}/>
      <Footer/>
    </div>
      
    
  );
}

export default App;
