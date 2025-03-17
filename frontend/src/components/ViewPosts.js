import React from 'react';

const ViewPosts = ({ posts }) => {
  return (
    <div className="view-posts">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available yet!</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.username}</h3>
            <p>{post.content}</p>
            <small>{new Date(post.date).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewPosts;
