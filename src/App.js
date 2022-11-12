import React, { useCallback } from 'react';
import { Card, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

const App = () => {
  const [postId, setPostId] = useState(1);

  const [post, setPost] = useState(null);

  const getPost = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {method: "GET"}) // 명시적으로 get 요청
    .then((response) => response.json())
    .then((data) => setPost(data));
  }, [postId])

  // const getPost = () => {
  // fetch("https://jsonplaceholder.typicode.com/posts/1")
  // .then((response) => response.json())
  // .then((data) => setPost(data))
  // };

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <div>
      {post == null ? (
        <div>로딩 중...</div>
      ) : (
      <Card style={{ width: "18rem" }}>
        <Card.Header>Post 1 데이터</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{post.userId}</ListGroup.Item>
          <ListGroup.Item>{post.id}</ListGroup.Item>
          <ListGroup.Item>{post.title}</ListGroup.Item>
          <ListGroup.Item>{post.body}</ListGroup.Item>
        </ListGroup>
      </Card>
      )}
      <button onClick={() => setPostId((prev) => prev + 1)}>다음글 보기</button>
    </div>
  );
};

export default App;

// useCallback 사용 전 코드
// const getPost = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => setPost(data))
// };