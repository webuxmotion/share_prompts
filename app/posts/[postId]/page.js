import React from 'react'

export async function generateMetadata({ params, searchParams }) {
  const postId = params.postId;

  return {
    title: `Post id is: ${postId}`
  }
}

export default function page({ params }) {
  return (
    <div>Page id: {params.postId}</div>
  )
}
