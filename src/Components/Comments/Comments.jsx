import React, { useState } from 'react';
import './Comments.css';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      id: Date.now(),
      text: commentText,
      author: 'Admin',
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  const handleLogoutClick = (event) => {
    event.preventDefault();
    setComments([]);
  };

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      <p>{comments.length} COMMENTS</p>
      <p>Be the First to Comment!</p>
      <p>
        You are logged in as <a href="#" id="logout" onClick={handleLogoutClick}>Log out</a>
      </p>
      <ul id="comments-list">
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text} - {comment.author}
          </li>
        ))}
      </ul>
      <form id="comment-form" onSubmit={handleFormSubmit}>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};
export default CommentsSection;

