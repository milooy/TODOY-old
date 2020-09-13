import Link from "next/link"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { withApollo } from "../../../apollo/client"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const FeedQuery = gql`
  query FeedQuery {
    feed {
      id
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`

const Post = ({ post }) => (
  <Link href="/p/[id]" as={`/p/${post.id}`}>
    <a>
      <h2>{post.title}</h2>
      <small>By {post.author.name}</small>
      <p>{post.content}</p>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          padding: 2rem;
          display: block;
        }
      `}</style>
    </a>
  </Link>
)

const style = css`
  color: hotpink;
`

const Button = styled.button`
  color: hotpink;
`

const HomePage = () => {
  const { loading, error, data } = useQuery(FeedQuery)

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <div css={style}>Some hotpink text</div>
      <h1>hi</h1>
      <Button>할루</Button>
    </div>
  )
}

export default HomePage;
