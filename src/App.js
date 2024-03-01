// App.js
import React, { useState, useEffect } from 'react';
// import PostList from './PostList';
// import PostForm from './PostForm';
import postsData from './posts.json';
import PostList from './Compoinent/PostList';
import PostForm from './Compoinent/PostForm';
import './App.css';
import SearchBar from './Componinent2/SearchBar';
import UserList from './Componinent2/UserList';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  useEffect(() => {
    setPosts(postsData);
  }, []);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };



  return (
    <div className="app">
{/* Q1 */}
      <h1>Danh sách bài viết</h1>
      <PostList posts={posts} />
      <h2>Thêm bài viết mới</h2>
      <PostForm addPost={addPost} />

{/* Q2 */}
      <div className="app">
      <h1>Danh sách người dùng</h1>
      <SearchBar onSearch={handleSearch} />
      <UserList users={users} searchTerm={searchTerm} />
    </div>
    </div>
  );
}

export default App;
