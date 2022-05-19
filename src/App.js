import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])

  const createPost=(newPost)=>{
setPosts([...posts,newPost])
  }
  
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={'List Posts: 1'} />
    </div>
  );
}

export default App;
