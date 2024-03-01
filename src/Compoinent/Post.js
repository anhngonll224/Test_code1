import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Tác giả: {post.author}</p>
    </div>
  );
}

export default Post;