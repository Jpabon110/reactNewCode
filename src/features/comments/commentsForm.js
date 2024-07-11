import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import { postsComments } from '../../redux/slices/commentsSlice';

export function CommentsForm() {
  const [ comment, setComment] = useState('');
  const [ postId, setPostId] = useState('');
  const dispatch = useDispatch();
  const {
    loading,
    error
  } =  useSelector((state) => state.comments);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postsComments({ comment, postId }));
    setComment('');
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>post Id</Form.Label>
      <Form.Control type="text" placeholder="post id" value={postId} onChange={(e) => setPostId(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="comments"
          name="comments"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}