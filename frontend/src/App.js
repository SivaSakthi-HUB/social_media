import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './src./components/Navbar';
import Post from './components/Post';
import ViewPosts from './components/ViewPosts';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post addPost={addPost} />} />
        <Route path="/view-posts" element={<ViewPosts posts={posts} />} />
      </Routes>
    </div>
  );
};

const Home = () => (
  <div className="home">
    <h1>Welcome to My Social Media Platform</h1>
    <p>Share your thoughts with the world.</p>
  </div>
);

export default App;
