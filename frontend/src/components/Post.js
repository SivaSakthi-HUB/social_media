import React, { useState } from 'react';

const Post = ({ addPost }) => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !content) {
      alert('Please enter both username and post content.');
      return;
    }
    // Create a new post object
    const newPost = { username, content, date: new Date() };
    addPost(newPost);
    setUsername('');
    setContent('');
  };

  return (
    <div className="post-form">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label htmlFor="content">Post Content:</label>
          <textarea 
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
          />
        </div>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default Post;
