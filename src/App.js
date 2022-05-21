import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])
const [selectedSort,setSelecedSort]=useState('');
  const createPost=(newPost)=>{
setPosts([...posts,newPost])
  }

  const removePost=(post)=>{
    setPosts(posts.filter(p=>p.id !== post.id))
  }

  const sortPosts=(sort)=>{
    selectedSort(sort);
  }
  
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:"15px 0"}}/>
      <div>
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort by"
        options={[
          {value:'title',name:'By name'},
          {value:'body',name:'By description'}

        ]}
        />
      </div>
      {posts.length !==0
      ?<PostList remove={removePost} posts={posts} title={'List Posts: 1'} />
      :<h1 style={{textAlign:'center'}}>Posts empty</h1>
      }
      
    </div>
  );
}

export default App;
