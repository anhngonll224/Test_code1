// PostForm.js
import React, { useState } from 'react';

function PostForm({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('Tiêu đề và nội dung không được để trống');
      return;
    }
    const newPost = {
      id: Date.now(),
      title,
      content,
      author,
    };
    addPost(newPost);
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tiêu đề"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Nội dung"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tác giả"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Thêm bài viết</button>
    </form>
  );
}

export default PostForm;
