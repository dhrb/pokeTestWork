import './App.css';
import Header from './View/Header/Header';
import Body from './View/Body/Body';
import Footer from './View/Footer/Footer';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
        setLoading(true)
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then (res => {
          setPosts(res.data.results)
          setLoading(false)
        })
        .catch (err => {
          console.log(err.message)
        })
  }, []);

  return (
    <div className="App">
      <Header />
      <Body posts={posts} loading={loading}/>
      <Footer />
    </div>
  );
}

export default App;
