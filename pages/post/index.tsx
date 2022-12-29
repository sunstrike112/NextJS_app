import * as React from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link';
export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage({ posts }: PostListPageProps) {
  // console.log(posts)
  return (
    <div>
      <h1>Post List Page</h1>
      <ul>{posts.map(post =>
        <li key={post.id}>
          <Link href={`/post/${post.id}`} legacyBehavior>
            <a>{post.title}</a>
          </Link>
        </li>)}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // console.log('static props')
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()
  // console.log('data : ', data)
  return {
    props: {
      posts: data.data.map((item: any) => ({id: item.id, title: item.title }))
    }
  }
}
