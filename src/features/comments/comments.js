import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Stack from 'react-bootstrap/Stack';


import { getComments } from '../../redux/slices/commentsSlice';

export function Comments() {
  const dispatch = useDispatch();
  const {
    loading,
    comments,
    error
  } =  useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  console.log("ALO?", comments);
  return (
    <>
    <Stack gap={3}>
    {comments.map((comment) => (
      <div className="p-2">{comment.body}</div>
    ))}
    </Stack>
      </>
  )
}