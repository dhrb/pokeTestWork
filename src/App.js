import './App.css';
import Header from './View/Header/Header';
import Body from './View/Body/Body';
import Footer from './View/Footer/Footer';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
      .then (res => {
          setPosts(res.data.results)
      })
      .catch (err => {
          console.log(err.message)
      })
  }, []);
  const pokemons = posts.map((post) => {
    return <p>{post.name}</p>
  })
  return (
    <div className="App">
      <Header />
      <Body posts={posts}/>
      <Footer />
    </div>
  );
}

export default App;
