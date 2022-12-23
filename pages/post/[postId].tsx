import { useRouter } from "next/router"
import * as React from "react"

export interface PostDetailProps { }

export default function PostDetailPage(props: PostDetailProps) {
  const router = useRouter()

  return <div>
    <h1>Post Detail Page</h1>
    <p>Query: {JSON.stringify(router.query)}</p>
  </div>
}
